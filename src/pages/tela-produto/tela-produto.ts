import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'

/**
 * Generated class for the TelaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-produto',
  templateUrl: 'tela-produto.html',
})
export class TelaProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaProdutoPage');
  }

  goToDescricaoProdutoPage(){
    this.navCtrl.push(DescricaoProdutoPage)
  }

}
