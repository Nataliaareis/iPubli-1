import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SignupEmpresaProvider } from './../../providers/signup-empresa/signup-empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup-empresa',
  templateUrl: 'signup-empresa.html',
})
export class SignupEmpresaPage {

  form: FormGroup;
  empresa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private provider: SignupEmpresaProvider, private toast: ToastController) {7
    this.empresa = this.navParams.data.contact || { };
    this.createForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupEmpresaPage');
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.empresa.key],
      name: [this.empresa.name, Validators.required],
      cnpj: [this.empresa.cnpj, Validators.required],
      empresakey: [this.empresa.empresakey, Validators.required],
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