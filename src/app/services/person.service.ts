import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { PersonResponseModel } from '../models/personResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people! : Person[] 
  apiUrl = "https://localhost:44329/api/peoples/"

  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<PersonResponseModel>{
    return this.httpClient.get<PersonResponseModel>(this.apiUrl + "getall")
  }
  getFavorite(): Observable<PersonResponseModel> {
    return this.httpClient.get<PersonResponseModel>(this.apiUrl + "favorites")
  }
  getBlocked(): Observable<PersonResponseModel> {
    return this.httpClient.get<PersonResponseModel>(this.apiUrl + "blocked")
  }
  addPerson(person: Person):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", person)
  }
  deletePerson(person:Person):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete",person )
  }
  updatePerson(person: Person):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", person)
  }
}


