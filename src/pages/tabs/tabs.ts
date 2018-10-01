import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { SignupPage } from '../signup/signup';
import { HidePage } from '../hide/hide';
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
  tab5Root = HidePage;
  tab6Root = TelaLoginPage;
  constructor() {

  }
}
