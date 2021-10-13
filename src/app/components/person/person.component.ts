import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/models/person';
import { PersonDeleteComponent } from 'src/app/components/person-delete/person-delete.component';
import { PersonService } from 'src/app/services/person.service';
import { PersonAddComponent } from '../person-add/person-add.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlockedPersonComponent } from '../blocked-person/blocked-person.component';
import { FavoritePersonComponent } from '../favorite-person/favorite-person.component';




@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  
  people: Person[] = [];
  dataLoaded=false;
  filterText="";
  
  constructor(public personService:PersonService ,private dialog:MatDialog) {
   }

  ngOnInit(): void {
     this.getPeople();
  }
  
  getPeople(){
    this.personService.getPeople().subscribe(response=>{
      this.people= response.data
      this.dataLoaded = true;
    })  
  }
  addPerson(){
    this.dialog.open(PersonAddComponent)
  } 
  deletePerson(person:Person){
    this.dialog.open(PersonDeleteComponent,{
      data:person
    })
  }
  updatePerson(person:Person){
    this.dialog.open(PersonAddComponent,{
      data:person
    })

  }
  updateFavorite(person:Person){
    this.dialog.open(FavoritePersonComponent,{
      data:person
    })
    
  }
   updateBlocked(person:Person){
    this.dialog.open(BlockedPersonComponent,{
      data:person
    })
  }
}