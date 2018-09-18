import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupEmpresaPage } from './signup-empresa';

@NgModule({
  declarations: [
    SignupEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupEmpresaPage),
  ],
})
export class SignupEmpresaPageModule {}
