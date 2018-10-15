import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

/**
 * Generated class for the DescricaoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao-produto',
  templateUrl: 'descricao-produto.html',
})
export class DescricaoProdutoPage {

  public produto;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private InAppBrowser: InAppBrowser 
    ) {
    this.produto = navParams.get("parametro");
    console.log(this.produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoProdutoPage');
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
