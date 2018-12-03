import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, LoadingController } from 'ionic-angular';
import { EmpresaInfluencersPage } from '../empresa-influencers/empresa-influencers'
import { TelaConfiguracoesPage } from '../tela-configuracoes/tela-configuracoes'
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil'
import { TelaUploadPage } from '../tela-upload/tela-upload'
import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { VisionUploadPage } from '../vision-upload/vision-upload';

/**
 * Generated class for the EmpresaHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-home',
  templateUrl: 'empresa-home.html',
})
export class EmpresaHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseauth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaHomePage');
  }

  goToEmpresaInfluencersPage(){
    this.navCtrl.push(EmpresaInfluencersPage)
  }

  goToTelaConfiguracoesPage(){
    this.navCtrl.push(TelaConfiguracoesPage)
  }

  goToEmpresaPerfilPage(){
    this.navCtrl.push(EmpresaPerfilPage)
  }

  goToTelaUploadPage(){
    this.navCtrl.push(VisionUploadPage)
  } 

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000, 
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
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
  
}
