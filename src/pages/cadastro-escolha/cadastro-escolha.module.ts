import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEscolhaPage } from './cadastro-escolha';

@NgModule({
  declarations: [
    CadastroEscolhaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEscolhaPage),
  ],
})
export class CadastroEscolhaPageModule {}
