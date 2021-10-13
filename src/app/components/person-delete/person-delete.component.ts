import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {

  deletedPerson! : Person

  constructor(
    private personService:PersonService,
    @Inject(MAT_DIALOG_DATA) public data:Person,
    private dialogRef : MatDialogRef<PersonComponent>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  deletePerson(){
    this.deletedPerson=this.data;
    console.log(this.deletedPerson)
    this.personService.deletePerson(this.deletedPerson).subscribe((res:any)=>{
      console.log(res.message)
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
