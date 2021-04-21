import { UserLogin } from './../../UserLogin';
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginEmail:string='';
message:string='';
public loginPassword:string='';
  constructor(private svc:TestService,private router : Router) { }
  user:UserLogin=new UserLogin();
  ngOnInit(): void {
  }
  public logIn(){

    this.user.store(this.loginEmail,this.loginPassword);
    if(this.loginEmail=="admin" && this.loginPassword=="admin"){
      this.router.navigate(['admin']);
    }
    this.svc.logInto(this.user)
    .subscribe(
      res => {//console.log(res);
        if(res){
          
          this.router.navigate(['courses']);
        }
        else{
          console.log("unable to enter");
        }
      },
    )
  }
  

}
