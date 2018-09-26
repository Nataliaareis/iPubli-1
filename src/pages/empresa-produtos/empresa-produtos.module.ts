import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaProdutosPage } from './empresa-produtos';

@NgModule({
  declarations: [
    EmpresaProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaProdutosPage),
  ],
})
export class EmpresaProdutosPageModule {}
