import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addCity("Brampton","Canada", "23");
    this.a();
  }

  addCity(cityname, country, temp) {
    //for each saved city in the local drive add a card displaying:
    // CityName:
    // City current temp:
    //Deleting button
    var newCard = document.createElement("div");
    newCard.classList.add("city-card");
    var tempDisplay = document.createElement("p");
    tempDisplay.innerText = temp;
    tempDisplay.classList.add("temp");
    newCard.appendChild(tempDisplay);
    var cityDisplay = document.createElement("p");
    cityDisplay.innerText = cityname;
    cityDisplay.classList.add("city-country");
    newCard.appendChild(cityDisplay);
    var countryDisplay = document.createElement("p");
    countryDisplay.innerText = country;
    countryDisplay.classList.add("city-country");
    newCard.appendChild(countryDisplay);
    var display = document.getElementById("cityContainer");
    display.appendChild(newCard);
  }

  a()
  { 
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
      document.getElementById("cityContainer").innerHTML=abc;         
    }  
  }
}
