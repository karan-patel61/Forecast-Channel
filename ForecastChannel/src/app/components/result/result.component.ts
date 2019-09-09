import { Component, OnInit } from '@angular/core';

import { SavedCitiesComponent} from '../saved-cities/saved-cities.component';

@Component({
  providers: [SavedCitiesComponent],
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

   a: any;
   cityData: any;

  constructor(private comp: SavedCitiesComponent) {
    this.a = localStorage.getItem('home_data') != null;
    this.cityData = [];
    localStorage.setItem('arr_size', this.cityData.length);
    // console.log(this.a);
  }

  public callMe(): void {
    this.comp.addCity('11', 'Tokyo', 'Japan');
    console.log('size of a: ' + this.comp.a.length);
  }

  addCity(){
    console.log('Size of array(before):'+localStorage.getItem('arr_size'));
    var temp = this.getTemp().toString();
    var city = localStorage.getItem('city');
    var count = localStorage.getItem('country');
    this.cityData.push({'city':city,'country':count,'temp':temp});
    console.log(JSON.stringify(this.cityData));
    var i;
    var size = localStorage.getItem('arr_size');
    for(i=0;i<size;i++){
      console.log('First element in local storage'+localStorage.getItem('arr_'+i));
    }
    
    this.save(this.cityData);
    
  }

  //saving a new city to the Local Storage
  save(arr){
    var i;
    localStorage.setItem('arr_size', arr.length);
    for(i=0;i<arr.length;i++){
      var add = JSON.stringify(arr[i]);
      localStorage.setItem('arr_'+i,add);
      console.log(localStorage.getItem('arr_'+i));
      var data = JSON.parse(localStorage.getItem('arr_'+i));
      console.log(data);
    }
  }
  t2(){
    console.log('2');
  }
  getTemp(){
    let json = JSON.parse(localStorage.getItem('home_data'));
    return (json.main.temp);
  }

  getName(){
    this.setCondition();
    return localStorage.getItem('city')+' , '+localStorage.getItem('country');
    
  }
  setCondition(){
    var c = localStorage.getItem('condition');
    //console.log(c);
    var t1 = document.getElementById('condition');
    //console.log(t1.className);
    if (c === 'Rain') {
      //change this to the rain card
      console.log(document.getElementById('condition'));
      document.getElementById('conditionCard').removeAttribute('class');
      document.getElementById('condition').removeAttribute('class');
      document.getElementById('conditionCard').classList.add('card');
      document.getElementById('conditionCard').classList.add('card-rain');
      document.getElementById('condition').classList.add('rain');
      //set the card to night
      // var hr = (new Date()).getHours(); //get hours of the day in 24Hr format (0-23)
      // if (hr >=20 || hr<6){
      //   //setting the condition to NIGHT TIME
      //   document.getElementById("conditionCard").classList.add("card-night");
      //   document.getElementById("condition").classList.add("night");
    }
    else if(c === 'Snow'){
      //change this to the Snow card
      console.log(document.getElementById('condition'));
      document.getElementById('conditionCard').removeAttribute('class');
      document.getElementById('condition').removeAttribute('class');
      document.getElementById('conditionCard').classList.add('card');
      document.getElementById('conditionCard').classList.add('card-snow');
      document.getElementById('condition').classList.add('snow');
    }
    else if(c === 'Storm'){
      //change this to the Storm card
      console.log(document.getElementById('condition'));
      document.getElementById('conditionCard').removeAttribute('class');
      document.getElementById('condition').removeAttribute('class');
      document.getElementById('conditionCard').classList.add('card');
      document.getElementById('conditionCard').classList.add('card-storm');
      document.getElementById('condition').classList.add('storm');
    }
    else if(c=== 'Clear'){
      //change this to the Sunny card
      console.log(document.getElementById('condition'));
      document.getElementById('conditionCard').removeAttribute('class');
      document.getElementById('condition').removeAttribute('class');
      document.getElementById('conditionCard').classList.add('card');
      document.getElementById('conditionCard').classList.add('card-sunny');
      document.getElementById('condition').classList.add('sunny');
    }
  }

  changeCard(condition){
    document.getElementById('conditionCard').classList.add(condition);
  }

  ngOnInit() {
    console.log('This is the city data length: '+this.cityData.length);
    console.log('This is the local arr length: '+localStorage.getItem('arr_size'));
  }

}
