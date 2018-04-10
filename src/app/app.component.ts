import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConfigProvider } from '../providers/config/config';
import { CardsPage } from '../pages/cards/cards';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public configProvider: ConfigProvider
      ) {
    this.initializeApp();


    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // serve apenas para pegar e setar o localstore
      let config = this.configProvider.getConfigData();
      if(config == null){
        this.rootPage = HomePage;
        this.configProvider.setConfigData(false);
      }else{
        this.rootPage = CardsPage
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
