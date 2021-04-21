import { SignupComponent } from './../signup/signup.component';
import { Router } from '@angular/router';
import { Course } from './AdminCourse';
import { Component, OnInit } from '@angular/core';
import { CoursetestService } from './coursetest.service';

@Component({
  selector: 'app-admincourse',
  templateUrl: './admincourse.component.html',
  styleUrls: ['./admincourse.component.css']
})
export class AdmincourseComponent implements OnInit {
  courseName!:string;
  courseType!:string;
  courseVideourl!:string;
  courseYear!:string;
  coursePdfurl!:string;
  courseImg!:string;
  constructor(private router:Router,private src:CoursetestService) { }
  data:any=[];
  user:Course=new Course();
  ngOnInit(): void {
    this.data=[];
  // constructor(private c : CoursetestService) { }
  // ngOnInit(): void {
    this.src.getData().subscribe(
      (respose : Course[] )=>{
         this.data = respose;
      }
    
    );
 }
gotologout(){
  this.router.navigate(['login']);
}

updateDetails(){
  this.user.store( this.courseName,
    this.courseType,
    this.courseVideourl,
    this.courseYear,
    this.coursePdfurl,
    this.courseImg);
   this.src.updateCourse(this.user).subscribe(
     (data:any)=>{
       if(data){
        window.alert("successfully uploaded");
       }
       else{
         window.alert("not updated the respective course");
       }
     }
   );
window.location.reload();

}
}