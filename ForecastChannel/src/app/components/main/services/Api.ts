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

    }
    setCountry(_country){
        console.log(_country);
        this.country = _country;
    } 

    getId() {

        let obs = this.httpClient.get("https://openweathermap.org/data/2.5/find?q=" + this.city_name + ",%20" + this.country + "&units=metric&appid=b6907d289e10d714a6e88b30761fae22&_=1557631358810&units=metric");
        obs.subscribe(
            data => {
                
         
                var a = JSON.parse(JSON.stringify(data));

                this._ID = JSON.stringify(a.list['0'].id);
                this.city_name = JSON.stringify(a._name);

                localStorage.setItem("home_id", this._ID);
            },
            error => {
                
            }
        );

        localStorage.setItem("city",this.city_name);

    }


    
    getData(id) {
        
        console.log(id);
        let obs = this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=5ae417af10467613a5fa88d5674e5e25&units=metric");
        obs.subscribe(
            data => {
                
                var a = JSON.parse(JSON.stringify(data));

                console.log((JSON.stringify(a.main['temp'])));
                alert("Weather in "+localStorage.getItem("city")+" is "+JSON.stringify(a.main['temp']))
                
                localStorage.setItem("home_data", JSON.stringify(data));
            },
            error => {
                
            }
        );

        localStorage.getItem("home_data");

    }
}
