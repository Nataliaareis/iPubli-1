import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private PATH = 'users/';
  userid: string;

  constructor(private db: AngularFireDatabase, private afauth: AngularFireAuth) {
    afauth.authState.subscribe(user => {
      if (user){
      this.userid = user.uid
      }
    })
  }
 
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(userdata: any) {
    
    return this.db.list(this.PATH).update(this.userid, { name: userdata.name, lname: userdata.lname, userkey: userdata.userkey,  type: 'usuário' })
          
    /*return new Promise((resolve, reject) => {
      if (user.key) {
        this.db.list(this.PATH)
          .update(this.userid, { name: user.name, lname: user.lname, userkey: user.userkey, email: user.email, password: user.password, type: 'usuário' })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.object(this.PATH +  this.userid)
          .set({ name: user.name, lname: user.lname, userkey: user.userkey, email: user.email, password: user.password, type: 'usuário' })
          .then(() => resolve());
      }
    })*/
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
