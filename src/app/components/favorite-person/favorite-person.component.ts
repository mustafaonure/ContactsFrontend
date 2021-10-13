import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data } from 'jquery';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-favorite-person',
  templateUrl: './favorite-person.component.html',
  styleUrls: ['./favorite-person.component.css']
})
export class FavoritePersonComponent implements OnInit {
  person!:Person
  people: Person[] = [];
  dataLoaded=false;
  
  
  constructor(private personService:PersonService ,
    @Inject(MAT_DIALOG_DATA) public data:Person,private dialogRef : MatDialogRef<PersonComponent>,
    private _snackBar: MatSnackBar
    ) { }
  
  ngOnInit(): void {
    
  }
  
  updateFavorite(){
    this.person=this.data
    this.person.blockedNumber = false;
    if(this.person.favorites == false || this.person.favorites == null){
      this.person.favorites = true;
    }
    else{
      this.person.favorites = false;
    }
    this.personService.updatePerson(this.person).subscribe((res:any)=>{
      console.log(res.message),
      this.dialogRef.close()
      this._snackBar.open(res.message,'',{
        duration:2000
      });
      setTimeout(()=>{
        window.open('http://localhost:4200/','_self')
      },500)
    })
  }

}
