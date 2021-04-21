import { User } from './../User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }
  public getUsers():Observable<User>{
    return this.http.get<User>("http://localhost:8080/getAllUsers");
  }

  public deleteUser(userEmail:string):Observable<User>{
    return this.http.delete<User>("http://localhost:8080/cancel/"+userEmail);
  }
}