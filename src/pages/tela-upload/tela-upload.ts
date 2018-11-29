import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaUploadProvider } from '../../providers/tela-upload/tela-upload';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-tela-upload',
  templateUrl: 'tela-upload.html',
})

export class TelaUploadPage {
  title: string;
  form: FormGroup;
  prod: any;

  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: TelaUploadProvider,
    private toast: ToastController, public camera: Camera) {
        // se vier um produto, use ele; se nao veio, crie um novo objeto.
        this.prod = this.navParams.data.prod || {};
        this.createForm();
        this.setupPageTitle();
        this.myPhotosRef = firebase.storage().ref('/Products/');
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
      prodlink: [this.prod.prodlink, Validators.required],
      prodimgurl: ['']
    });
  }

  selectPhoto(): void {
    this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 100,
        encodingType: this.camera.EncodingType.PNG,
      }).then(imageData => {
        this.myPhoto = imageData;
        this.uploadPhoto();
        this.toast
        .create({ message: 'Image uploaded successfully.', duration: 3000 })
        .present();
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
      });
  }

  private uploadPhoto(): void {
    this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  onSubmit() {
    this.form.controls['prodimgurl'].setValue(this.myPhotoURL);
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
