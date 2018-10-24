import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TelaUploadProvider {
  private PATH = 'tela-upload/';
  constructor(private db: AngularFireDatabase) {  }

  // retornar lista de produtos upados
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('prodname'))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    });
  }

  // retornar objeto unico
  get(key: string) {
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(c => { return {key: c.key, ...c.payload.val()};});
  }

  // salvar produto
  save(prod: any) {
    return new Promise((resolve, reject) => {
      if (prod.key) {
        this.db.object(this.PATH + prod.key)
        .update({ prodname: prod.prodname, prodinfluencer: prod.prodinfluencer, proddate: prod.proddate, prodlink: prod.prodlink })
        .then(() => resolve())
        .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
        .push({ prodname: prod.prodname, prodinfluencer: prod.prodinfluencer, proddate: prod.proddate, prodlink: prod.prodlink })
        .then(() => resolve());
      }
    });
  }

  // remover produto
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
