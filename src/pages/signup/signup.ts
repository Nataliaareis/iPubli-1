import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UserProvider } from './../../providers/user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  form: FormGroup;
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder, 
    private provider: UserProvider, 
    private toast: ToastController) {
    this.user = this.navParams.data.contact || { };
    this.createForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.user.key],
      name: [this.user.name, Validators.required],
      lname: [this.user.lname, Validators.required],
      userkey: [this.user.userkey, Validators.required],
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Informações cadastradas com sucesso.', duration: 3000 }).present();
          //this.navCtrl.pop();
          this.navCtrl.setRoot(TabsPage);
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar informações.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
