import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../result/result.component';
import {Api} from './services/Api';
import { Data } from './services/Data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  
  constructor(private api:Api, private display:Data) { 
      
  }

  ngOnInit() {
    this.display.init();
  }

  init(){
    var obj = document.getElementById("loc") as HTMLSelectElement
    this.nameSplit(obj.value);


  }

  nameSplit(name: string) {
    var split = name.split(",");
    this.search(split[0],split[1]);
}
  search(city,country){
    this.api.setCity(city);
    this.api.setCountry(country);
    this.api.getId(); 
  }
}
