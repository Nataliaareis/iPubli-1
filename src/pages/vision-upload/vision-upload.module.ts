import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisionUploadPage } from './vision-upload';

@NgModule({
  declarations: [
    VisionUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(VisionUploadPage),
  ],
})
export class VisionUploadPageModule {}
