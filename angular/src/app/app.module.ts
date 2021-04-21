
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { TestService } from './test.service';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { UserRegistationService } from './serach-delete/user-registation.service';
import { AdmincourseComponent } from './admincourse/admincourse.component';
import { CoursetestService } from './admincourse/coursetest.service';
import {AuthGuard} from './auth.guard';
import { CourseintoComponent } from './courseinto/courseinto.component';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    CoursesComponent,
    SerachDeleteComponent,
    AdmincourseComponent,
    CourseintoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    
    
  ],

  providers: [TestService,CoursesService,UserRegistationService,CoursetestService,AuthGuard],
  bootstrap: [AppComponent]

})


export class AppModule { }
