import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaPerfilPage } from './empresa-perfil';

@NgModule({
  declarations: [
    EmpresaPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaPerfilPage),
  ],
})
export class EmpresaPerfilPageModule {}
