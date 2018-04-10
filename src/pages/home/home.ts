import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   slides = [
     {
       titulo: "testando",
       descricao: "to testando mesmo se errar foda-se",
       imagem: "assets/imgs/Johnny_large.png",
     },
     {
      titulo: "test 2",
      descricao: "to aprendendo porra",
      imagem: "assets/imgs/briga.jpg",
    },
    {
      titulo: "teste 3",
      descricao: "GG agora foi",
      imagem: "assets/imgs/comemorar.jpg",
    }
   ];

   goPage(){
     this.navCtrl.setRoot(CardsPage);
   }

}
