import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { LoginPage } from '../login/login';
import { FavoritosPage } from '../favoritos/favoritos';
import { FeedUsuarioPage } from '../feed-usuario/feed-usuario';
import { TelaLoginPage } from '../tela-login/tela-login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedUsuarioPage;
  tab3Root = FavoritosPage;
  tab4Root = UserPage;
  tab5Root = LoginPage;
  tab6Root = TelaLoginPage;
  constructor() {
  }
}
