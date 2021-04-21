import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-courseinto',
  templateUrl: './courseinto.component.html',
  styleUrls: ['./courseinto.component.css']
})
export class CourseintoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient,private s:DomSanitizer,private r:Router) { }
    //data="";
    data =   
    
    {
      "courseImg" :"https://dwglogo.com/wp-content/uploads/2017/03/AngularJS_logo_01.png",
      "courseName":"ANGULAR",
      "courseType":"Frontend",
      "courseYear":"2020",
      "courseVideourl":"https://www.youtube.com/embed/6wD4V0rvlDI",
      "coursePdfurl":"https://pepa.holla.cz/wp-content/uploads/2015/10/ng-book-The-Complete-Book-on-AngularJS.pdf"
    }
    // data!:any;
    address="";
  ngOnInit(): void {
    // console.log(this.router.snapshot.params);
    this.address=this.router.snapshot.params.name;
    // this.http.get('http://localhost:8080/details/:'+this.address,{observe:"response"}).subscribe(
    //   (response)=>{
    //   this.data=response.body;
    //   }
    // );

  
 


  }
  safeUrl: any;
  getvideo(){
    // console.log("Inside getvieo"+this.data.courseVideourl);
    // return  (this.data.courseVideourl);
  return this.s.bypassSecurityTrustResourceUrl(this.data.courseVideourl);
    
  }
  getpdf(){
    return this.s.bypassSecurityTrustResourceUrl(this.data.coursePdfurl);
  }
  courses(){
    this.r.navigate(['/courses']);
  }
  logout(){
    this.r.navigate(['login']);
  }
}