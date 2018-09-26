import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescricaoProdutoPage } from './descricao-produto';

@NgModule({
  declarations: [
    DescricaoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(DescricaoProdutoPage),
  ],
})
export class DescricaoProdutoPageModule {}
