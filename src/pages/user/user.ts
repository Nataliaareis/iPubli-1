import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'
import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public userid: string;
  //public userdata: AngularFireObject <any>;
  public name: string;
  public type: string;
  public userdata = {};
  public userProfile: firebase.database.Reference;
  public currentUser: User;
  constructor(public db: AngularFireDatabase, public afauth: AngularFireAuth, 
              public navCtrl: NavController, public navParams: NavParams) {
    afauth.authState.subscribe(user => {
      if (user){
      this.userid = user.uid
      }
    })
    
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
      }
    });
    this.userdata = db.object('users/'+this.userid).valueChanges().subscribe(console.log);
    this.name = this.db.object('users/' + this.userid + '/name/').toString(); 
    this.type = this.db.object('users/' + this.userid + '/type/').toString();
    //this.userdata = firebase.database().ref('/users/'+this.userid).once('value')
    //.then(function(snapshot) {
      //this.name = (snapshot.val() && snapshot.val().name) || 'Anonymoys';
    //})
  }

  ionViewDidLoad() {
    const userdataref: firebase.database.Reference = firebase.database().ref(`/users/${this.userid}`);
    userdataref.on('value', userSnapshot => {
      this.userdata = userSnapshot.val();
    })
  }

  abrirPastas(){
  }
  
}