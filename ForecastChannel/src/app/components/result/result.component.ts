import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

   a:any;

  constructor() { 
    this.a = localStorage.getItem("home_data")!=null;
    //console.log(this.a);
  }

  getTemp(){
    let json = JSON.parse(localStorage.getItem("home_data"));
    return (json.main.temp);
  }

  getName(){
    return localStorage.getItem("city")+" , "+localStorage.getItem("country");
  }
  ngOnInit() {
    
  }

}
