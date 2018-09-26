import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPastaPage } from './favoritos-pasta';

@NgModule({
  declarations: [
    FavoritosPastaPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritosPastaPage),
  ],
})
export class FavoritosPastaPageModule {}
