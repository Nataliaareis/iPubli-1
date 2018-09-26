import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaProdutoPage } from './tela-produto';

@NgModule({
  declarations: [
    TelaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaProdutoPage),
  ],
})
export class TelaProdutoPageModule {}
