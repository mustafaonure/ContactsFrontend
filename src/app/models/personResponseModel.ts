import { Person } from "./person";
import { ResponseModel } from "./responseModel";

export interface PersonResponseModel extends ResponseModel{
    data:Person[]; 
}