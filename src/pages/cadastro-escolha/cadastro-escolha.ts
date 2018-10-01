import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupEmpresaPage } from '../signup-empresa/signup-empresa';

 /**
 * Generated class for the CadastroEscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-escolha',
  templateUrl: 'cadastro-escolha.html',
})
export class CadastroEscolhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEscolhaPage');
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage)
  }

  goToSignupEmpresaPage(){
    this.navCtrl.push(SignupEmpresaPage)
  }

}
