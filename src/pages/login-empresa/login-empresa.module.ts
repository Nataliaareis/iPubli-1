import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginEmpresaPage } from './login-empresa';

@NgModule({
  declarations: [
    LoginEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginEmpresaPage),
  ],
})
export class LoginEmpresaPageModule {}
