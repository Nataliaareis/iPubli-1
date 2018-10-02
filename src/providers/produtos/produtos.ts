import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  private baseApiPath = "https://api.instagram.com/v1";
  private tag = "ipubli1"

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getImageProductsByTag(){
    return this.http.get(this.baseApiPath + "/tags/" + this.tag + "/media/recent/?access_token=" + this.getApiKey());
  }

  getApiKey(): string{
    return "6708603174.78f1722.4eb5485ff7e846668d2e2824d74a37c1"; //token
  }
}
