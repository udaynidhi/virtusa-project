import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import {Observable } from 'rxjs'
import { UserLogin } from 'src/UserLogin';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  public token = localStorage.getItem('currentUser');
  public readonly API_URL = 'http://localhost:8080';
  constructor(private http : HttpClient,private router:Router) { }
  public doRegistration(user:User):Observable<any>{
  
   return this.http.post<User>('http://localhost:8080/register',user);
   }

   
public logInto(userlogin:UserLogin):Observable<any>{
  return this.http.post<any>('http://localhost:8080/login',userlogin);
  }
  loggedIn(){
    return !!localStorage.getItem('token'); 
  }


}
