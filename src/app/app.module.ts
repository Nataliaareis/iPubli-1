import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
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
import { TelaUploadProvider } from '../providers/tela-upload/tela-upload';

import { InAppBrowser } from "@ionic-native/in-app-browser"
import { UserProvider } from '../providers/user/user'; //Para abrir um link externo no app
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

// importar modulos do Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SignupEmpresaProvider } from '../providers/signup-empresa/signup-empresa';
import { ResetSenhaPage } from '../pages/reset-senha/reset-senha';
import { ResetSenhaPageModule } from '../pages/reset-senha/reset-senha.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD8Cij63lrWDzQN6kxbFs1o5Qgg0KnC1Uc",
      authDomain: "ipubli-080818.firebaseapp.com",
      databaseURL: "https://ipubli-080818.firebaseio.com",
      projectId: "ipubli-080818",
      storageBucket: "ipubli-080818.appspot.com",
      messagingSenderId: "291747959916"
    }),
    AngularFireDatabaseModule,

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
    LoginPageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD8Cij63lrWDzQN6kxbFs1o5Qgg0KnC1Uc",
      authDomain: "ipubli-080818.firebaseapp.com",
      databaseURL: "https://ipubli-080818.firebaseio.com",
      projectId: "ipubli-080818",
      storageBucket: "ipubli-080818.appspot.com",
      messagingSenderId: "291747959916"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ResetSenhaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    InAppBrowser,
    UserProvider,
    TelaUploadProvider,
    SignupEmpresaProvider
  ]
})
export class AppModule {}
