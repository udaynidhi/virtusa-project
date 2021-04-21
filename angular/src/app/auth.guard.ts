import { TestService } from './test.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private router:Router,private auth:TestService){

 }
 canActivate():boolean{
   if(this.auth.loggedIn()){
     return true;
   }else{
     this.router.navigate(['/register']);
     return false;
   }
 }
  
}
