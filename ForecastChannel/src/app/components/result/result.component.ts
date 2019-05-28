import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

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
    this.setCondition();
    return localStorage.getItem("city")+" , "+localStorage.getItem("country");
    
  }
  setCondition(){
    var c = localStorage.getItem("condition");
    //console.log(c);
    var t1 = document.getElementById("condition");
    //console.log(t1.className);
    if (c === "Rain") {
      //change this to the rain card
      console.log(document.getElementById("condition"));
      document.getElementById("conditionCard").removeAttribute("class");
      document.getElementById("condition").removeAttribute("class");
      document.getElementById("conditionCard").classList.add("card card-rain");
      document.getElementById("condition").classList.add("rain");
      //set the card to night
      // var hr = (new Date()).getHours(); //get hours of the day in 24Hr format (0-23)
      // if (hr >=20 || hr<6){
      //   //setting the condition to NIGHT TIME
      //   document.getElementById("conditionCard").classList.add("card-night");
      //   document.getElementById("condition").classList.add("night");
    }
    else if(c === "Snow"){
      //change this to the Snow card
      console.log(document.getElementById("condition"));
      document.getElementById("conditionCard").removeAttribute("class");
      document.getElementById("condition").removeAttribute("class");
      document.getElementById("conditionCard").classList.add("card card-snow");
      document.getElementById("condition").classList.add("snow");
    }
    else if(c === "Storm"){
      //change this to the Storm card
      console.log(document.getElementById("condition"));
      document.getElementById("conditionCard").removeAttribute("class");
      document.getElementById("condition").removeAttribute("class");
      document.getElementById("conditionCard").classList.add("card card-storm");
      document.getElementById("condition").classList.add("storm");
    }
  }

  changeCard(condition){
    document.getElementById("conditionCard").classList.add(condition);
  }

  ngOnInit() {
    
  }

}
