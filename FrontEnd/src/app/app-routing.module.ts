import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { HomeComponent } from './home/home.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';

import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'studentSignup',component:StudentSignupComponent},
  {path:'studentSignin',component:StudentSigninComponent},
  { path: "registration", component: EnrollmentformComponent} ,
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'footer', component: FooterComponent },
  { path:'contactus', component: ContactusComponent },
  { path:'login', component: LoginComponent },
  { path:'studentsignup',component:StudentSignupComponent},
  { path:'studentlogin',component:StudentLoginComponent},
  { path:'courses',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
