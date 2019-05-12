import { Component, OnInit } from '@angular/core';
import { grabid } from 'src/app/model/grabId';
import { HttpClientModule, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import {Api} from './services/Api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  
  constructor(private api:Api) { 
      
  }

  ngOnInit() {

  }

  init(){
    var obj = document.getElementById("loc") as HTMLSelectElement
    //console.log(obj.value);
    this.nameSplit(obj.value);

  }

  nameSplit(name: string) {
    var split = name.split(",");
    this.search(split[0],split[1]);
}
  search(city,country){
    this.api.getId(city,country);
    this.api.getData(localStorage.getItem("home_id"));
  }
}
