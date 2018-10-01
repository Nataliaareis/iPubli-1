import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { ProdutosProvider } from '../../providers/produtos/produtos';

=======
import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
>>>>>>> 4b2019fed0e6b67792a3c05cab8d7f2845680a54
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

  public lista_produtos = new Array<any>();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedUsuarioPage');
    this.produtosProvider.getImageProductsByTag().subscribe(
      data=>{
        const response = (data as any);
        this.lista_produtos = response.result;
        console.log(data);
      }, error =>{
        console.log(error);
      }
    )

  }

  goToTelaProdutoPage(){
    this.navCtrl.push(TelaProdutoPage)
  }

  goToDescricaoProdutoPage(){
    this.navCtrl.push(DescricaoProdutoPage)
  }
}
