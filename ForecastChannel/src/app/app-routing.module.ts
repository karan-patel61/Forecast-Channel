import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedCitiesComponent } from './components/saved-cities/saved-cities.component';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  { path: 'saved-cities', component: SavedCitiesComponent },
  { path: 'main', component:MainComponent},
  { path: '', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
