import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaUploadProvider } from '../../providers/tela-upload/tela-upload';

@IonicPage()
@Component({
  selector: 'page-tela-upload',
  templateUrl: 'tela-upload.html',
})

export class TelaUploadPage {
  title: string;
  form: FormGroup;
  prod: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: TelaUploadProvider,
    private toast: ToastController) {
        // se vier um produto, use ele; se nao veio, crie um novo objeto.
        this.prod = this.navParams.data.prod || {};
        this.createForm();
        this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.prod ? 'Editar Produto' : 'Upload do Produto';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.prod.key],
      prodname: [this.prod.prodname, Validators.required],
      prodinfluencer: [this.prod.prodinfluencer, Validators.required],
      proddate: [this.prod.proddate, Validators.required],
      prodlink: [this.prod.prodlink, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
        this.provider.save(this.form.value)
        .then(() => {
            this.toast
            .create({ message: 'Produto cadastrado com sucesso.', duration: 3000 })
            .present();
            this.navCtrl.pop();
        })
        .catch((e) => {
            this.toast
            .create({ message: 'Erro ao salvar produto. Tente novamente.', duration: 3000 })
            .present();
            console.error(e);
        });
    }
}
}
