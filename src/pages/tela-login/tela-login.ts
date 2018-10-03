import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage  } from '../home/home';
import { CadastroEscolhaPage } from '../cadastro-escolha/cadastro-escolha';
import { EmpresaHomePage } from '../empresa-home/empresa-home';

/**
 * Generated class for the TelaLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-login',
  templateUrl: 'tela-login.html',
})
export class TelaLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaLoginPage');
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage)
  }

  goToHomePage(){
    this.navCtrl.push(HomePage)
  }

  goToCadastroEscolhaPage(){
    this.navCtrl.push(CadastroEscolhaPage)
  }

  goToEmpresaHomePage(){
    this.navCtrl.push(EmpresaHomePage)
  }

  

}
