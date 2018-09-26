import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { SignupEmpresaPage } from '../signup-empresa/signup-empresa';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto';
import { TelaLoginPage } from '../tela-login/tela-login';
import { TelaProdutoPage } from '../tela-produto/tela-produto';

/**
 * Generated class for the HidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hide',
  templateUrl: 'hide.html',
})
export class HidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HidePage');
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage)
  }
  goToSignupEmpresaPage(){
    this.navCtrl.push(SignupEmpresaPage)
  }
 
  goToDescricaoProdutoPage(){
    this.navCtrl.push(DescricaoProdutoPage)
  }

  goToTelaLoginPage(){
    this.navCtrl.push(TelaLoginPage)
  }

  goToTelaProdutoPage(){
    this.navCtrl.push(TelaProdutoPage)
  }

}
