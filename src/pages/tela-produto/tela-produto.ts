import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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
  public userid: string;
  private PATH: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    private InAppBrowser: InAppBrowser,
    public afauth: AngularFireAuth,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
    ) {
    this.produto = navParams.get("parametro");
    console.log(this.produto);
    afauth.authState.subscribe(user => {
      if (user){
      this.userid = user.uid;
      this.PATH = `folder/${this.userid}/`;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaProdutoPage');
  }

  goToDescricaoProdutoPage(produto){
    this.navCtrl.push(DescricaoProdutoPage,{
      parametro: produto
    })
  }

  saveImagetoFolder(){
    return this.db.list(this.PATH).push({img: this.produto.id})
    .then(() => {
      this.exibirToast('Produto adicionado aos favoritos!');
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

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000, 
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
}

}
