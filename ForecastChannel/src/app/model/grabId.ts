import { Observable, throwError, Operator } from 'rxjs';
import { readFileSync } from 'fs';
import { HttpClient } from '@angular/common/http';

export class grabid {

    _name: string;
    city_name: string;
    country: string;
    _ID: any;
    constructor(private httpClient: HttpClient){

    }
        

    init(name: string) {
        var split = name.split(",");
        this.city_name = split[0];
        this.country = split[1];
        console.log(this.getId(this.city_name, this.country) );
        //this.getData(this._ID);
    }

    getId(cname, count) {

        // console.log("Start id.")
        // var xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         var myObj = JSON.parse(this.responseText);
        //         //console.log(myObj);
        //         this._ID = JSON.stringify(myObj.list['0'].id);
        //         console.log(myObj.list['0'].id);
        //     }
        // };
        // xmlhttp.open("GET", "", true);
        // xmlhttp.send();
        // console.log("End id");

        // let obs = this._http.get("https://openweathermap.org/data/2.5/find?q=" + cname + ",%20" + count + "&appid=b6907d289e10d714a6e88b30761fae22&_=1557631358810");
        // obs.subscribe(
        //     data => {
        //         //console.log(JSON.stringify(data))
        //     },
        //     error => {
                
        //     }
        // );

        var str = "https://openweathermap.org/data/2.5/find?q=" + cname + ",%20" + count + "&appid=b6907d289e10d714a6e88b30761fae22&_=1557631358810";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                 var myObj = JSON.parse(this.responseText);
                 //console.log(myObj);
            }
                
        }
        xmlHttp.open("GET", str, true); // true for asynchronous 
        xmlHttp.send(null);

        return xmlHttp;
    }




    
    getData(id) {
        
        
        
        var str = "https://samples.openweathermap.org/data/2.5/weather?id=" + id + "&appid=5ae417af10467613a5fa88d5674e5e25";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                 var myObj = JSON.parse(this.responseText);
                 console.log(myObj);
            }
                
        }
        xmlHttp.open("GET", str, true); // true for asynchronous 
        xmlHttp.send(null);
        
    }
}
