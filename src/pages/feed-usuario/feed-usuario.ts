import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
/**
 * Generated class for the FeedUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-usuario',
  templateUrl: 'feed-usuario.html',
})
export class FeedUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedUsuarioPage');
  }

  goToTelaProdutoPage(){
    this.navCtrl.push(TelaProdutoPage)
  }

  goToDescricaoProdutoPage(){
    this.navCtrl.push(DescricaoProdutoPage)
  }
}
