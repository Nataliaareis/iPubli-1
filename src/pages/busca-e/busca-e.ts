import { Component, Injectable, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { templateSourceUrl } from '@angular/compiler';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignupEmpresaProvider } from '../../providers/signup-empresa/signup-empresa';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';

/**
 * Generated class for the BuscaEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-e',
  templateUrl: 'busca-e.html',
})
export class BuscaEPage {

  private allEmpresas: any;
  obEmpresas: Observable<any>;
  empresas = [];
  queryText: string;
  nempresas : any;
  nfiltradas : any;
  filtros = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SignupEmpresaProvider,
    private toast: ToastController, private db: AngularFireDatabase) {
    this.getAllEmpresas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaEPage');
  }

  getAllEmpresas(){
    this.empresas = [
      "Dior",
      "eZ",
      "Lojas Luz",
      "Alpha",
    ];
  }

  getEmpresas(ev:any){
    this.getAllEmpresas();
    let queryTextLowerCase = ev.target.value;
    if(queryTextLowerCase && queryTextLowerCase.trim()!=''){
      this.empresas = this.empresas.filter((empresa) => {
        return (empresa.toLowerCase().indexOf(this.queryText.toLowerCase())>-1);
      })
    }
  }

  abrirEmpresa(emp : any){
    this.navCtrl.push('EmpresaPerfilPage', {emp:emp});
  }

}
