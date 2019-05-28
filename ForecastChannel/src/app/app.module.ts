import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';
import { HttpClientModule } from '@angular/common/http';
import {Api} from './components/main/services/Api';
import {Data} from './components/main/services/Data';
import { NavbarComponent } from './navbar/navbar.component';
import { SavedCitiesComponent } from './components/saved-cities/saved-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent,
    NavbarComponent,
    SavedCitiesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [Api,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
