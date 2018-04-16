import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
  providers:[
    MovieProvider
  ]
})
export class CardsPage {
  private loader;
  public refresh;
  public isRefreshing: boolean = false;
  public page = 1;
  public listaFilmes = new Array<any>();
  public infinitiScroll;




  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider : MovieProvider,
    public loadingCrtl: LoadingController
  ) {
  }

  ionViewDidEnter(){
    this.carregarFilmes();
  }


carregarFilmes(newpage:boolean = false){

  this.openLoading();
  this.movieProvider.getLatestMovies(this.page).subscribe(data =>{

    const response = (data as any);
    if(newpage){
      this.listaFilmes = this.listaFilmes.concat(response.results);
    }
    else{
      this.listaFilmes = response.results;
    }

    if(this.isRefreshing){
      this.refresh.complete();
      this.isRefreshing = false;
    }

    console.log(data);
    this.closeLoading();
  }, error =>{
    console.log(error);
    this.closeLoading();
    
    if(this.isRefreshing){
      this.refresh.complete();
      this.isRefreshing = false;
    }

  });
}

  doRefresh(refresh) {
    this.refresh = refresh;
    this.isRefreshing = true;
    this.carregarFilmes();
  }


  openLoading(){
    this.loader = this.loadingCrtl.create({
      content: "Carregando a porra toda..."
    })
    this.loader.present();
  }
  closeLoading(){
    this.loader.dismiss();
  }

  doInfinite(infinitiScroll){
    this.page++;
    this.infinitiScroll = infinitiScroll;
    this.carregarFilmes(true);
  }

}
