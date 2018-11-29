import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { TelaProdutoPage } from '../tela-produto/tela-produto';

/**
 * Generated class for the InfluencerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influencer',
  templateUrl: 'influencer.html',
})
export class InfluencerPage {

  galleryType = 'Grade';

  public lista_produtos = new Array<any>();
  public valorpesq;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider    ) {
    this.valorpesq = navParams.get("parametro");
  }

  ionViewDidLoad() {
    this.produtosProvider.getImageProductsByTag().subscribe(
      data=>{
        const response = (data as any);
        this.lista_produtos = response.data;
        this.onSearch;
        console.log(this.lista_produtos);
      }, error =>{
        console.log(error);
      }
    )
  }

  onSearch(){//Para pesquisar
      this.lista_produtos = this.lista_produtos.filter(lista_produtos =>{
        return ((lista_produtos.user.username.indexOf(this.valorpesq) > -1 ))
      })

      return this.lista_produtos.sort(
        (a, b) => b.created_time > a.created_time ? 1 : b.created_time === a.created_time ? 0 : -1
        );

  }

  goToTelaProdutoPage(produto){
    console.log();
    this.navCtrl.push(TelaProdutoPage, {
      parametro: produto
    })
  }

}
