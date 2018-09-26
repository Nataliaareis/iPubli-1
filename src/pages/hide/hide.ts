import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { SignupEmpresaPage } from '../signup-empresa/signup-empresa';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto';
import { TelaLoginPage } from '../tela-login/tela-login';
import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { EmpresaHomePage } from '../empresa-home/empresa-home';
import { EmpresaInfluencersPage } from '../empresa-influencers/empresa-influencers';
import { FavoritosPastaPage } from '../favoritos-pasta/favoritos-pasta';
import { FavoritosPage } from '../favoritos/favoritos';

import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
import { EmpresaProdutosPage } from '../empresa-produtos/empresa-produtos';
import { FeedUsuarioPage } from '../feed-usuario/feed-usuario';


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
  goToEmpresaHomePage(){
    this.navCtrl.push(EmpresaHomePage)
  }

  goToEmpresaInfluencersPage(){
    this.navCtrl.push(EmpresaInfluencersPage)
  }

  goToFavoritosPage(){
    this.navCtrl.push(FavoritosPage)
  }

  goToFavoritosPastaPage(){
    this.navCtrl.push(FavoritosPastaPage)
  }

  goToEmpresaPerfilPage(){
    this.navCtrl.push(EmpresaPerfilPage)
  }

  goToEmpresaProdutosPage(){
    this.navCtrl.push(EmpresaProdutosPage)
  }

  goToFeedUsuarioPage(){
    this.navCtrl.push(FeedUsuarioPage)
  }

}
