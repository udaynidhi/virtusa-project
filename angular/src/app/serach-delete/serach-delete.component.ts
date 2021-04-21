import { User } from './../User';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

 u=new User();


 data:any=[];
  userEmail!:string;
  constructor(private router:Router,private http:HttpClient) { }

userName!:string;
mobileNumber!:string;
password!:string;

userName1!:string;
mobileNumber1!:string;
password1!:string;
userEmail1!:string;



  ngOnInit() {
  this.http.get('http://localhost:8080/admin/',{observe : 'response'})
  .subscribe((response)=>{
    this.data=response.body;
  })   
//   this.data=[
//     {
//       "userEmail":"abc@gmail.com",
//       "userName":"Ashish",
//       "mobileNumber":"999999999",
//       "password":"abc"
//     },
//     {

//       "userEmail":"abcd@gmail.com",
//       "userName":"Darshi",
//       "mobileNumber":"123",
//       "password":"abc"
//     }
//   ] 

 }
addbutton()
{
   console.log(this.userEmail);
  this.http.post("http://localhost:8080/admin/addUser/",{
    userEmail:this.userEmail1,
    userName:this.userName1,
    mobileNumber:this.mobileNumber1,
    password:this.password1
  },{observe:"response"}).subscribe(
    (response)=>{
      if(response.body == true){
        alert('professor added Successfully!!!');
      }
      else{
        alert('Professor cannot be  added');
      }
    }
  )
  window.location.reload();
  
}
  
updatebutton(){

  console.log(this.userEmail);


this.http.put("http://localhost:8080/admin/updateUser/",{
  userEmail:this.userEmail,
  userName:this.userName,
  mobileNumber:this.mobileNumber,
  password:this.password
},{observe:"response"}).subscribe(
  (response)=>{
    if(response.body == true){
      alert('User updated Successfully!!!');
    }
    else{
      alert('User not updated');
    }
  }
)
window.location.reload();
}
logout(){
  this.router.navigate(['login']);
}

// editbutton(emailId:string){
//   let mail,name,mobile,pass;
//   for(let i=0;i<this.data.length;i++){
//     if(this.data[i].userEmail==emailId){
//       name=this.data[i].userName;
//       mail=this.data[i].userEmail;
//       mobile=this.data[i].mobileNumber;
//       pass=this.data[i].password;
//       this.userName=name;
//       this.userEmail=mail;
//       this.mobileNumber=mobile;
//       this.password=pass;
//       const filterArray = 
//       this.data.filter((item:any)=>item.userEmail !== emailId);
//       this.data=filterArray;
//     }
//   }
// }

deletebutton(emailId:string){
var flag=null;
console.log(emailId);
this.http.delete('http://localhost:8080/admin/delete/'+emailId,{observe:"response"})
.subscribe(
  (response)=>{
    if(response.body==true){
      alert('User deleted successfully');
      
    }
    else{
      alert('User not deleted');
    }
  }
)
window.location.reload();
}


}