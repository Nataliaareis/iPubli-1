import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetSenhaPage } from '../reset-senha/reset-senha';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { CadastroEscolhaPage } from '../cadastro-escolha/cadastro-escolha';
import { EmpresaHomePage } from '../empresa-home/empresa-home';
import { LoginEmpresaPage } from '../login-empresa/login-empresa';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public user: any;
  public flag: any; 
  @ViewChild('usuario') email;
  @ViewChild('senha') password;
  public userdata: any;
constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public firebaseauth: AngularFireAuth,
              public db: AngularFireDatabase,
              public loadingCtrl: LoadingController) {
      //this.presentLoadingDefault();
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));
      
  }

  /*
  public presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 4000);
  }
  */
 
  ionViewDidLoad() {
    this.firebaseauth.authState.subscribe(user => {
      if (user){
        const userdataref: firebase.database.Reference = firebase.database().ref(`/users/${this.user.uid}`);
        userdataref.on('value', userSnapshot => {
          this.userdata = userSnapshot.val();
        })
      }
    })   
  }

public LoginComEmail(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
        this.flag = 1;
        this.navCtrl.push(TabsPage);
      })
      .catch((erro: any) => {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (erro.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é válido.');
          } else if (erro.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (erro.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (erro.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é válida.');
          }
          toast.present();
      });
  }
public cadastrarUsuario(): void {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value , this.password.value)
    .then(() => {
      this.firebaseauth.auth.currentUser.sendEmailVerification();

      toast.setMessage('Usuário criado com sucesso.');
      toast.present();
      this.flag = 2;
      this.navCtrl.push(CadastroEscolhaPage); 
      
    })
    .catch((erro: any) => {
      if (erro.code  == 'auth/email-already-in-use') {
        toast.setMessage('O e-mail digitado já está em uso.');
      } else if (erro.code  == 'auth/invalid-email') {
        toast.setMessage('O e-mail digitado não é válido.');
      } else if (erro.code  == 'auth/operation-not-allowed') {
        toast.setMessage('Não está habilitado criar usuários.');
      } else if (erro.code  == 'auth/weak-password') {
        toast.setMessage('A senha digitada é muito fraca.');
      }
      toast.present();
    });
  }
public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.exibirToast('Você saiu');
      this.navCtrl.parent.parent.setRoot(LoginPage);
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }
private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000, 
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
}

goToResetSenhaPage(){
  this.navCtrl.push(ResetSenhaPage)
}

goToTabsPage(){
  this.navCtrl.setRoot(TabsPage);
}

goToLoginEmpresaPage(){
  this.navCtrl.push(LoginEmpresaPage)
}

public verificarCadastro(): void {
  
  if (this.flag == 1) {
    this.navCtrl.setRoot(TabsPage);
  } else if (this.flag == 2) {
    this.navCtrl.setRoot(CadastroEscolhaPage); 
  }
  else 
    this.navCtrl.setRoot(TabsPage); 
}

}