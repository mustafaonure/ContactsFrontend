import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { BlockedPersonComponent } from '../blocked-person/blocked-person.component';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {
  people: Person[] = [];
  dataLoaded=false;
  
  constructor(private personService:PersonService ,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getBlocked();
  }
  getBlocked(){
    this.personService.getBlocked().subscribe(response=>{
      this.people= response.data
      this.dataLoaded = true;
    })  
  }
  updateBlocked(person:Person){
    this.dialog.open(BlockedPersonComponent,{
      data:person
      
    })
    
  }

}