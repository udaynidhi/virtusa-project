import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private src:HttpClient) { }


  getData():Observable<any>{
    return this.src.get('http://localhost:8080/courses');
    
  }

}
