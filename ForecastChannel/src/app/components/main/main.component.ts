import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../result/result.component';
import {Api} from './services/Api';
import { Data } from './services/Data';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private api:Api, private display:Data, private authService: AuthService) { }

  ngOnInit() {
    var message = document.getElementById("login");
    this.display.init();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        message.innerText = "Login Successful!";
        message.classList.add("green");
        console.log("User Login Sucessful!");
      }
      else{
        message.innerText = "Not Logged In yet!";
        message.classList.add("red");
        console.log("User Must Login...");
      }
    });
    
    
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
