import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HidePage } from './hide';

@NgModule({
  declarations: [
    HidePage,
  ],
  imports: [
    IonicPageModule.forChild(HidePage),
  ],
})
export class HidePageModule {}
