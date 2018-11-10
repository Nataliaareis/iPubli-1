import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';

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

  public produto;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    private InAppBrowser: InAppBrowser 
    ) {
    this.produto = navParams.get("parametro");
    console.log(this.produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaProdutoPage');
  }

  goToDescricaoProdutoPage(produto){
    this.navCtrl.push(DescricaoProdutoPage,{
      parametro: produto
    })
  }

  openWebPage(url: string){
    const option: InAppBrowserOptions = {
      zoom: 'no',
      hardwareback: 'no'
    }
    const browser = this.InAppBrowser.create(url, '_self', option);
    browser.show();
  }

}
