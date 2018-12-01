import { Component, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { LoadingController, Loading } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaUploadProvider } from '../../providers/tela-upload/tela-upload';
import firebase from 'firebase';
import 'rxjs/add/operator/toPromise';
  
  @Component({
    selector: 'page-vision-upload',
    templateUrl: 'vision-upload.html'
  })
  export class VisionUploadPage {
  
    imagem: string;
    loading: Loading;
    resultados: object[];
    marcas: object[];

    title: string;
    form: FormGroup;
    prod: any;
  
    public myPhotosRef: any;
    public myPhoto: any;
    public myPhotoURL: any;
  
    constructor(
      private change: ChangeDetectorRef,
      private loadingCtrl: LoadingController,
      private camera: Camera, 
      private http: Http ,
      public navCtrl: NavController, public navParams: NavParams,
      private formBuilder: FormBuilder, private provider: TelaUploadProvider,
      private toast: ToastController) {
        // se vier um produto, use ele; se nao veio, crie um novo objeto.
        this.prod = this.navParams.data.prod || {};
        this.createForm();
        this.setupPageTitle();
        this.myPhotosRef = firebase.storage().ref('/Products/');
      }
    //  ) {}
  
      
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
      prodimgurl: [''],
      prodLabel0: [''],
      prodLabel1: [''],
      prodLabel2: [''],
      prodLabel3: [''],
      prodLabel4: ['']
    });
  }

    tirarFoto() {
      this.loading = this.loadingCtrl.create({
        content: 'Aguarde...'
      });
      this.loading.present();
  
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  
      this.camera.getPicture(options)
      .then(imagemDados => {
        this.imagem = 'data:image/jpeg;base64,' + imagemDados;
        this.myPhoto = imagemDados;
        this.uploadPhoto(imagemDados);
        return imagemDados;
      })
      .then(imagem => {
        return this.requisicaoParaAPI(imagem);
      })
      .then(resultado => {
        this.resultados = resultado.labelAnnotations;
        this.loading.dismiss();
        this.change.detectChanges();
        return this.requisicaoParaAPIMarca(this.imagem);
      })
      /*
      .then(imagem => {
        return this.requisicaoParaAPIMarca(imagem);
      }) */
      .then(marca => {
        this.marcas = marca.logoAnnotations;
        this.loading.dismiss();
        this.change.detectChanges();
      })
      .then (imagem =>  {
        this.myPhoto = imagem;
        this.uploadPhoto(imagem);
      })
      .catch(() => {
        this.loading.dismiss();
      })
  
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

    private uploadPhoto(imagemBase64): void {
      this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
        .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
        .then((savedPicture) => {
          this.myPhotoURL = savedPicture.downloadURL;
        });
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

    requisicaoParaAPI(imagemBase64) {
      const apiKey = 'AIzaSyCeSt6oRd0S2lo6YmVIVL5XOM0ROy8KJPU';
      const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
      const request = {
        "requests":[
          {
            "image":{
              "content": imagemBase64
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
    }
  
    requisicaoParaAPIMarca(imagemBase64) {
      const apiKey = 'AIzaSyCeSt6oRd0S2lo6YmVIVL5XOM0ROy8KJPU';
      const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
      const request = {
        "requests":[
          {
            "image":{
              "content": imagemBase64
            },
            "features":[
              {
                "type": "LOGO_DETECTION"
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
    }

    verificarPrecisao(valor) {
      return Math.round(valor * 100);
    }
  }
    