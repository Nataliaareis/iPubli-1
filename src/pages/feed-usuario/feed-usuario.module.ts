import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedUsuarioPage } from './feed-usuario';

@NgModule({
  declarations: [
    FeedUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedUsuarioPage),
  ],
})
export class FeedUsuarioPageModule {}
