import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:any;
  public userName:string='';
 public userEmail:string='';
 public mobileNumber:string='';
 public password:string='';
 public confirmPassword:string='';  
   
   constructor(private svc:TestService,private router:Router) { 
   }
   user:User=new User();
  //user !: User;
 // user =new User();
   ngOnInit(): void {
     
 
 
   }
   public signIn(){
     if(this.confirmPassword==this.password){
     this.user.store(this.userEmail,this.password,this.mobileNumber,this.userName);
     console.log(this.user);
     console.log(this.userEmail);
     let resp=this.svc.doRegistration(this.user);
     resp.subscribe(data=>{
       if(data){
        // console.log(data);
        // localStorage.setItem('token',data.token);
       this.router.navigate(['courses']);
     }
     else{
       console.log("please enter valid details");
     }
    }
     );
     }
     else{
      console.log("wrong password please check");
     }
   }
 public goTo():void{
   this.router.navigate(['login']);
 }
}
