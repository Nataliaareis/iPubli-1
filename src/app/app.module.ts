import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { HidePage } from '../pages/hide/hide';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPageModule } from '../pages/user/user.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { SignupEmpresaPageModule } from '../pages/signup-empresa/signup-empresa.module';
import { DescricaoProdutoPageModule } from '../pages/descricao-produto/descricao-produto.module';
import { TelaLoginPageModule } from '../pages/tela-login/tela-login.module';
import { TelaProdutoPageModule } from '../pages/tela-produto/tela-produto.module';
import { EmpresaHomePageModule } from '../pages/empresa-home/empresa-home.module';
import { EmpresaInfluencersPageModule } from '../pages/empresa-influencers/empresa-influencers.module';
import { FavoritosPageModule } from '../pages/favoritos/favoritos.module';
import { FavoritosPastaPageModule } from '../pages/favoritos-pasta/favoritos-pasta.module';
import { EmpresaPerfilPageModule } from '../pages/empresa-perfil/empresa-perfil.module';
import { EmpresaProdutosPageModule } from '../pages/empresa-produtos/empresa-produtos.module';
import { FeedUsuarioPageModule } from '../pages/feed-usuario/feed-usuario.module';
import { TelaConfiguracoesPageModule } from '../pages/tela-configuracoes/tela-configuracoes.module';
import { CadastroEscolhaPage } from '../pages/cadastro-escolha/cadastro-escolha';
import { CadastroEscolhaPageModule } from '../pages/cadastro-escolha/cadastro-escolha.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { TelaUploadPageModule } from '../pages/tela-upload/tela-upload.module';

import { InAppBrowser } from "@ionic-native/in-app-browser"
import { UserProvider } from '../providers/user/user'; //Para abrir um link externo no app


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
    HttpClientModule,
    UserPageModule,
    SignupPageModule,
    SignupEmpresaPageModule,
    DescricaoProdutoPageModule,
    TelaLoginPageModule,
    TelaProdutoPageModule,
    EmpresaHomePageModule,
    EmpresaInfluencersPageModule,
    FavoritosPageModule,
    FavoritosPastaPageModule,
    EmpresaPerfilPageModule,
    EmpresaProdutosPageModule,
    FeedUsuarioPageModule,
    TelaConfiguracoesPageModule,
    CadastroEscolhaPageModule,
    TelaUploadPageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD8Cij63lrWDzQN6kxbFs1o5Qgg0KnC1Uc",
      authDomain: "ipubli-080818.firebaseapp.com",
      databaseURL: "https://ipubli-080818.firebaseio.com",
      projectId: "ipubli-080818",
      storageBucket: "ipubli-080818.appspot.com",
      messagingSenderId: "291747959916"
    }),
    AngularFireDatabaseModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    InAppBrowser,
    UserProvider
  ]
})
export class AppModule {}
