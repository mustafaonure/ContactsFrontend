import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { FavoritePersonComponent } from '../favorite-person/favorite-person.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  people: Person[] = [];
  dataLoaded=false;
  
  constructor(private personService:PersonService ,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getFavorite();
  }
  getFavorite(){
    this.personService.getFavorite().subscribe(response=>{
      this.people= response.data
      this.dataLoaded = true;
    })  
  }
  updateFavorite(person:Person){
    this.dialog.open(FavoritePersonComponent,{
      data:person
    })
    
  }

}
