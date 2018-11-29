import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

import { Pipe, PipeTransform } from '@angular/core';

import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { InfluencerPage } from '../influencer/influencer';
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

  public lista_produtos = new Array<any>();
  public isSearchbarOpened = false;
  public valorpesq;
  public lista_pesq = this.lista_produtos;
  public lista_original = new Array<any>();
  public lista_influencers = new Array<any>();
  public influencers = 
          ["angelinadasilvaipubli",
           "jorgepittipubl",
           "adrianasantanaipubli"];

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
        this.lista_produtos = response.data;
        this.lista_original = response.data;
        this.lista_influencers = response.data;
        console.log(this.lista_produtos);
      }, error =>{
        console.log(error);
      }
    )

  }

  mostrarInfl(){
    this.lista_influencers = this.lista_influencers.filter(lista_influencers =>{
      return ((lista_influencers.user.username.indexOf(this.influencers[0]) > -1 )); //pesquisa empresa
    })
  }

  ordenarTime(){
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

  goToTelaInfluencerPage(item){
    console.log();
    this.navCtrl.push(InfluencerPage, {
      parametro: item
    })
  }


  onSearch(event: any){//Para pesquisar
    this.valorpesq = event.target.value;
    
    if(this.valorpesq && this.valorpesq.trim() != ''){
      this.lista_produtos = this.lista_produtos.filter(lista_produtos =>{
        return ((lista_produtos.user.username.indexOf(this.valorpesq) > -1 ||//pesquisa o influencer
                lista_produtos.caption.text.indexOf(this.valorpesq) > -1 ||//pesquisa alguma palavra(produto) na descrição
                lista_produtos.users_in_photo[0].user.username.indexOf(this.valorpesq) > -1)); //pesquisa empresa
      })
    }
    else{
        this.lista_produtos = this.lista_original;
    }
  }
}
