import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockedComponent } from './components/blocked/blocked.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NaviComponent } from './components/navi/navi.component';
import { PersonComponent } from './components/person/person.component';



const routes: Routes = [
  {path:"" ,pathMatch:"full", component:PersonComponent},
  {path:"person" ,pathMatch:"full", component:PersonComponent},
  {path:"favorites",pathMatch:"full", component:FavoritesComponent},
  {path:"blocked",pathMatch:"full", component:BlockedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }