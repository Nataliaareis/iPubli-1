import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaInfluencersPage } from '../empresa-influencers/empresa-influencers'
import { TelaConfiguracoesPage } from '../tela-configuracoes/tela-configuracoes'

/**
 * Generated class for the EmpresaHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-home',
  templateUrl: 'empresa-home.html',
})
export class EmpresaHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaHomePage');
  }

  goToEmpresaInfluencersPage(){
    this.navCtrl.push(EmpresaInfluencersPage)
  }

  goToTelaConfiguracoesPage(){
    this.navCtrl.push(TelaConfiguracoesPage)
  }
  
}
