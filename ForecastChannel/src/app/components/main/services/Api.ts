import { Observable, throwError, Operator } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class Api {

    _name: string;
    private city_name: string;
    private country: string;
    _ID: any;
    constructor(private httpClient: HttpClient){

    }
        

    setCity(city){
        console.log(city);
        this.city_name = city;
        localStorage.setItem("city",this.city_name);

    }
    setCountry(_country){
        console.log(_country);
        this.country = _country;
        localStorage.setItem("country",this.country);

    } 

    getId() {

        let obs1 = this.httpClient.get("https://openweathermap.org/data/2.5/find?q=" + this.city_name + ",%20" + this.country + "&units=metric&appid=b6907d289e10d714a6e88b30761fae22&_=1557631358810&units=metric")
        .toPromise().then(response => {
            var a = JSON.parse(JSON.stringify(response));
            localStorage.setItem("home_id", JSON.stringify(a.list['0'].id));
        }).then(a =>{
            this.getData(localStorage.getItem("home_id"));

        });

  
    }

    
    getData(id) {
        
        let obs2 = this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=5ae417af10467613a5fa88d5674e5e25&units=metric")
        .toPromise().then(response => {
            localStorage.setItem("home_data", JSON.stringify(response));
        }).then(a =>{
            document.location.reload();
        });

    }
}
