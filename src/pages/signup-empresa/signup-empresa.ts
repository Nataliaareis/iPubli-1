import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SignupEmpresaProvider } from './../../providers/signup-empresa/signup-empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      email: [this.empresa.email, Validators.required],
      password: [this.empresa.password, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Empresa criada com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao criar EmpresaProvider.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}