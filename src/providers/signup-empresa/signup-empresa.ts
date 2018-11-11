import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SignupEmpresaProvider {

  private PATH = 'signup-empresa/';
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

  save(empresa: any) {
    return this.db.list(this.PATH).update(this.userid, { name: empresa.name, cnpj: empresa.cnpj, empresakey: empresa.empresakey, type: 'empresa' })
    
    /*return new Promise((resolve, reject) => {
      if (empresa.key) {
        this.db.list(this.PATH)
          .update(empresa.key, { name: empresa.name, cnpj: empresa.cnpj, empresakey: empresa.empresakey, email: empresa.email, password: empresa.password, type: 'empresa' })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: empresa.name, cnpj: empresa.cnpj, empresakey: empresa.empresakey, email: empresa.email, password: empresa.password, type: 'empresa' })
          .then(() => resolve());
      }
    })*/
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
