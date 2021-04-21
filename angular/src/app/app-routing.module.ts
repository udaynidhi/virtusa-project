import { CourseintoComponent } from './courseinto/courseinto.component';
import { AuthGuard } from './auth.guard';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmincourseComponent } from './admincourse/admincourse.component';

const routes: Routes = [
  { path:'',redirectTo:'register',pathMatch:'full'},
  { path: 'register', component:SignupComponent},
  { path: 'login', component:LoginComponent },
  { path :'courses' , component:CoursesComponent,
  //canActivate:[AuthGuard]},
   },
  {path : 'admin',component:SerachDeleteComponent},
  {path : 'admin/courses',component:AdmincourseComponent},
  {path:'details/:name',component:CourseintoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
