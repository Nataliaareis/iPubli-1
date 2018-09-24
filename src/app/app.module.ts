import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { HidePage } from '../pages/hide/hide';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPageModule } from '../pages/user/user.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { SignupEmpresaPageModule } from '../pages/signup-empresa/signup-empresa.module';
import { SignupEmpresaPage } from '../pages/signup-empresa/signup-empresa';
import { EmpresaHomePageModule } from '../pages/empresa-home/empresa-home.module';
import { EmpresaInfluencersPageModule } from '../pages/empresa-influencers/empresa-influencers.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    UserPageModule,
    SignupPageModule,
    SignupEmpresaPageModule,
    EmpresaHomePageModule,
    EmpresaInfluencersPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage,
    HidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
