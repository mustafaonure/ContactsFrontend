import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-blocked-person',
  templateUrl: './blocked-person.component.html',
  styleUrls: ['./blocked-person.component.css']
})
export class BlockedPersonComponent implements OnInit {
  person!:Person

  people: Person[] = [];
  constructor(
    private personService:PersonService ,
    @Inject(MAT_DIALOG_DATA) public data:Person,private dialogRef : MatDialogRef<PersonComponent>,
    private _snackBar : MatSnackBar
    ) { }

  ngOnInit(): void {
  }
  updateBlocked(){
    this.person=this.data
    this.person.favorites = false;
      
      if(this.person.blockedNumber == false ||this.person.blockedNumber == null){
        this.person.blockedNumber = true;
      }
      else{
        this.person.blockedNumber = false;
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
