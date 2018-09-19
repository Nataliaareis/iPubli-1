import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { SignupEmpresaPage } from '../signup-empresa/signup-empresa';

/**
 * Generated class for the HidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hide',
  templateUrl: 'hide.html',
})
export class HidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HidePage');
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage)
  }
  goToSignupEmpresaPage(){
    this.navCtrl.push(SignupEmpresaPage)
  }


}
