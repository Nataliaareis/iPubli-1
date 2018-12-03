import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http, Headers, RequestOptions} from '@angular/http';

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
  resultados: object[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    private InAppBrowser: InAppBrowser,
    public afauth: AngularFireAuth,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    private http: Http
    ) {
    this.produto = navParams.get("parametro");
    console.log(this.produto);
    afauth.authState.subscribe(user => {
      if (user){
      this.userid = user.uid;
      this.PATH = `folder/${this.userid}/`;
      }
    })

//    this.requisicaoParaAPI();
    
  }

  categoriza(){

      this.requisicaoParaAPI(this.produto);
      
   //   this.resultados = res.labelAnnotations;
      
    

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

requisicaoParaAPI(produto) {
  const apiKey = 'AIzaSyCeSt6oRd0S2lo6YmVIVL5XOM0ROy8KJPU';
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  const request = {
    "requests":[
      {
      "image": {
        "source": {
          "ImageUri": this.produto.images.standard_resolution.url
        }
      },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults": 5
          }
        ]
      }
    ]
  }
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers});

  return this.http.post(url, request, options)
    .toPromise()
    .then(res => res.json().responses[0])
    
    .then(resultado => {
      this.resultados = resultado.labelAnnotations;
    })
  }

}
