import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetSenhaPage } from '../reset-senha/reset-senha';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { CadastroEscolhaPage } from '../cadastro-escolha/cadastro-escolha';
import 'firebase/auth';
import 'firebase/database';
import firebase, { User } from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public name: string;
  public type: string;
  public userdata = {};
  public user: any;
  public userProfile: firebase.database.Reference;
  public currentUser: User;
  public userid: string;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;
constructor(public db: AngularFireDatabase, public navCtrl: NavController,
              public toastCtrl: ToastController, public afauth: AngularFireAuth,
              public firebaseauth: AngularFireAuth) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));
  
    afauth.authState.subscribe(user => {
      if (user){
        this.userid = user.uid
      }
        
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));
    })
      
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
      }
    });

    this.userdata = db.object('users/'+this.userid).valueChanges().subscribe(console.log);
    this.name = this.db.object('users/' + this.userid + '/name/').toString(); 
    this.type = this.db.object('users/' + this.userid + '/type/').toString();
  
    }
public LoginComEmail(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((erro: any) => {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (erro.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (erro.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (erro.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (erro.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
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

      this.navCtrl.setRoot(CadastroEscolhaPage); 

    })
    .catch((erro: any) => {
      if (erro.code  == 'auth/email-already-in-use') {
        toast.setMessage('O e-mail digitado já está em uso.');
      } else if (erro.code  == 'auth/invalid-email') {
        toast.setMessage('O e-mail digitado não é valido.');
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

ionViewDidLoad() {
  const userdataref: firebase.database.Reference = firebase.database().ref(`/users/${this.userid}`);
  userdataref.on('value', userSnapshot => {
    this.userdata = userSnapshot.val();
  })
}

goToResetSenhaPage(){
  this.navCtrl.push(ResetSenhaPage)
}

goToTabsPage(){
  this.navCtrl.push(TabsPage)
}

}