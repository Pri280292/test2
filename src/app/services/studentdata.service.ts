import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
url=" https://gorest.co.in/public/v2/users"
  constructor(private http:HttpClient) { }
  students(){
    return this.http.get(this.url);
  }
  saveStudents(data:any){
    return this.http.post(this.url,data);
  }
}
