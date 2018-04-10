import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  constructor() {
  }

  // serve para pegar o estado dolocalstorege
  getConfigData() : any{
    return localStorage.getItem("config");
  }
//seta o estadado do root passando pelo provider
  setConfigData(showSlide: boolean){
    let config = {
      showSlide : false,
    }
    if(showSlide)
    config.showSlide = showSlide;

    localStorage.setItem("config", JSON.stringify(config))
  }
}
