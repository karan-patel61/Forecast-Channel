import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {

  a:any;

  constructor() { 
    this.a = [];
    console.log("constructor intialized");
  }

  ngOnInit() {
    this.addCity("Brampton","Canada", "25");
    console.log("ngInit intialized Size of a is:"+this.a.length);
    this.display();
  }

  public addCity(cityname, country, temp) {
    //for each saved city in the local drive add a card displaying:
    // CityName:
    // City current temp:
    //Deleting button
    // var newCard = document.createElement("div");
    // newCard.classList.add("city-card");
    // var tempDisplay = document.createElement("p");
    // tempDisplay.innerText = temp;
    // tempDisplay.classList.add("temp");
    // newCard.appendChild(tempDisplay);
    // var cityDisplay = document.createElement("p");
    // cityDisplay.innerText = cityname;
    // cityDisplay.classList.add("city-country");
    // newCard.appendChild(cityDisplay);
    // var countryDisplay = document.createElement("p");
    // countryDisplay.innerText = country;
    // countryDisplay.classList.add("city-country");
    // newCard.appendChild(countryDisplay);
    // var display = document.getElementById("cityContainer");
    // display.appendChild(newCard);
    this.a.push({"city":cityname,"country":country,"temp":temp});
    console.log(this.a);
    
  }

  getData(n){
    var data = JSON.parse(localStorage.getItem("arr_"+n));
    return data;
  }

  display(){
    var i;
    var display = document.getElementById("cityContainer");
    var len = localStorage.getItem("arr_size");
    console.log(len);
    for(i =0; i < len; i++){
      var p = " <div style='border:solid;border-width: 1px; border-radius:10px; background-color:rgb(166, 10, 239,.15); margin-bottom:10px'><span id=temp class=has-text-white style=font-size:50px >" +this.getData(i).temp+"&#8451;  </span><span id=city class=has-text-info style=font-size:30px > "+ this.getData(i).city+",  </span><span class=has-text-info style=font-size:30px > "+ this.getData(i).country+"  </span> <a class='button is-danger is-rounded' style='margin:25px 0px 0px 25px' > Delete</a> </div>";
      
      if(this.a.length == 0){
        var t0 = document.createElement("div");
        t0.innerText = "Saved Cities will appear on this page!";
        display.appendChild(t0);
        
      }
      else if(this.a.length === 1){
        document.getElementById("cityContainer").innerHTML+= p;

      }
      else if(this.a.length>1){
        document.getElementById("cityContainer").innerHTML+=p;
      }
    }
    console.log(p);
  }
/*
  a(){ 
    var a1 = "<div class=w3-container><div class=w3-card-4 w3-dark-grey style=width:25%><div class=w3-container w3-center><p>video</p><img src= ";
    var a = [ " https://image.ibb.co/cE0COF/java_mini_logo.jpg ",
        " https://preview.ibb.co/jaNQdF/marguerite_daisy_beautiful_beauty.jpg"];
    var a2= " alt=sir pic style=width:80%><p>John Doe</p></div></div></div>";
    
    var g; 
    for(var i=0;i<2;i++)
    { 
      g= document.createElement('div');
      g.id = i;
      document.body.appendChild(g);
      var abc = a1+a[i]+a2;
      document.getElementById("cityContainer").innerHTML+=abc;         
    }  
  }
  
  <div class="city-card">
    <span id="temp" class="temp">
      32
    </span>
    <span id="city" class="city-country">
      Brampton,
      </span>
    <span class="city-country">
      Canada
      </span>
    <button class="delete"> Delete</button>
  </div> 
  */
}
