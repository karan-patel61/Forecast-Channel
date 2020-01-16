import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../result/result.component';
import {Api} from './services/Api';
import { Data } from './services/Data';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-main',
  providers: [AppComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private api:Api, private display:Data, private authService: AuthService, private appComp: AppComponent) { }

  ngOnInit() {
    var loginDiv = document.getElementById("login");
    var loginMsg = document.getElementById("loginMessage");
    var loginButton = document.getElementById("googleSignIn");
    var logoutButton = document.getElementById("googleSignOut");
    var img = document.getElementById("userImg");
    this.display.init();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        loginMsg.innerText = "Login Successful!";
        loginDiv.classList.add("green");
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        logoutButton.style.width = "50%";
        logoutButton.style.margin = "auto";
        // user.photoUrl = user.photoUrl;
        // document.getElementById("userName").textContent = user.name;
        // document.getElementById("userEmail").textContent = user.email;
        console.log("User Login Sucessful!");
      }
      else{
        loginMsg.innerText = "Not Logged In yet!";
        loginDiv.classList.remove("green");
        loginDiv.classList.add("red");
        loginButton.style.display = "block";
        loginButton.style.width = "50%";
        loginButton.style.margin = "auto";
        logoutButton.style.display = "none";
        //user.photoUrl = "../../user.png";
        // document.getElementById("userName").textContent = "";
        // document.getElementById("userEmail").textContent = "";
        
        console.log("User Must Login...");
      }
    });
    
    
  }

  googleLogin(){
    this.appComp.signInWithGoogle();
    console.log('Google button clicked!!');
    
  }

  signOut(){
    this.appComp.signOut();
    console.log('Successfully Logged Out!');
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
