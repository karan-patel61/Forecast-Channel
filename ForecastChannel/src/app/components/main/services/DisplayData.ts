import { Injectable } from '@angular/core';

@Injectable()
export class DisplayData {

    _
    constructor(){
        this.init();
    }
        
    init(){
        var obj = document.getElementById("city") as HTMLSelectElement;
        obj.value = localStorage.getItem("city");
    }
    
}
