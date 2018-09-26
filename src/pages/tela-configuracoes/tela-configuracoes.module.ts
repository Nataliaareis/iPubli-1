import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaConfiguracoesPage } from './tela-configuracoes';

@NgModule({
  declarations: [
    TelaConfiguracoesPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaConfiguracoesPage),
  ],
})
export class TelaConfiguracoesPageModule {}
