import { Component, Pipe } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lista_produtos = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public produtosProvider: ProdutosProvider
    ) {
  }

  ionViewDidLoad() {
    this.produtosProvider.getImageProductsByTag().subscribe(
      data=>{
        const response = (data as any);
        this.lista_produtos = response.data;
        console.log(this.lista_produtos);
      }, error =>{
        console.log(error);
      }
    )
  
  }

 orderLikes(){
    return this.lista_produtos.sort(
      (a, b) => b.likes.count > a.likes.count ? 1 : b.likes.count === a.likes.count ? 0 : -1
      );
  } 
  
  goToTelaProdutoPage(produto){
    console.log();
    this.navCtrl.push(TelaProdutoPage, {
      parametro: produto
    })
  }

  
}
