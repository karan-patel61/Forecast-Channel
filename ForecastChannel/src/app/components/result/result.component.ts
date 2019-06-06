import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { SavedCitiesComponent} from '../saved-cities/saved-cities.component'

@Component({
  providers: [SavedCitiesComponent],
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

   a:any;
   cityData:any;

  constructor(private comp: SavedCitiesComponent) { 
    this.a = localStorage.getItem("home_data")!=null;
    this.cityData = [];
    //console.log(this.a);
  }

  public callMe():void{
    this.comp.addCity("11", "Tokyo", "Japan");
    console.log("size of a: "+ this.comp.a.length);
  }

  addCity(){
    var temp = this.getTemp().toString();
    var city = localStorage.getItem("city");
    var count = localStorage.getItem("country");
    this.cityData.push({"city":city,"country":count,"temp":temp});
    console.log(JSON.stringify(this.cityData));
    this.save(this.cityData);
    
  }

  save(arr){
    var i;
    localStorage.setItem("arr_size", arr.length);
    for(i=0;i<arr.length;i++){
      // localStorage.setItem('arr_'+i, arr[i]);
      // var added = localStorage.getItem("arr_"+i.toString);
      // var dataAdded = JSON.parse(JSON.stringify(added));
      var add = JSON.stringify(arr[i]);
      localStorage.setItem("arr_"+i,add);
      console.log(localStorage.getItem("arr_"+i));
      var data = JSON.parse(localStorage.getItem("arr_"+i));
      console.log(data);
    }
  }
  t2(){
    console.log("2");
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
      document.getElementById("conditionCard").classList.add("card");
      document.getElementById("conditionCard").classList.add("card-rain");
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
      document.getElementById("conditionCard").classList.add("card");
      document.getElementById("conditionCard").classList.add("card-snow");
      document.getElementById("condition").classList.add("snow");
    }
    else if(c === "Storm"){
      //change this to the Storm card
      console.log(document.getElementById("condition"));
      document.getElementById("conditionCard").removeAttribute("class");
      document.getElementById("condition").removeAttribute("class");
      document.getElementById("conditionCard").classList.add("card");
      document.getElementById("conditionCard").classList.add("card-storm");
      document.getElementById("condition").classList.add("storm");
    }
  }

  changeCard(condition){
    document.getElementById("conditionCard").classList.add(condition);
  }

  ngOnInit() {
    
  }

}
