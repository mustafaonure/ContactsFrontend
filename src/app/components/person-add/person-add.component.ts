import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';



@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  selectedValue!: string;
  personForm!:FormGroup
  updatedPerson!:Person
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Person,
    private fb:FormBuilder,
    private personService:PersonService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
     this.personForm= this.fb.group({
       name:this.data?.name||'',
       surname:this.data?.surname||'',
       phoneNumber:this.data?.phoneNumber||'',
       mail:this.data?.mail||'',
       webSite:this.data?.webSite||'',
       title:this.data?.title||''
    })
  }
  addPerson(){
    console.log(this.personForm.value);
    this.personService.addPerson(this.personForm.value).subscribe((res:any)=>{
      this._snackBar.open(res.message,'',{
        duration:2000
      });
      setTimeout(()=>{
        window.open('http://localhost:4200/','_self')
      },100)
      
    })
  }
  updatePerson(){
    this.updatedPerson=this.personForm.value
    this.updatedPerson.id=this.data.id  
    console.log(this.updatedPerson);
    this.personService.updatePerson(this.updatedPerson).subscribe((res:any)=>{
      this._snackBar.open(res.message,'',{
        duration:2000
      });
      setTimeout(()=>{
        window.open('http://localhost:4200/','_self')
      },500)
    })
  }

}
