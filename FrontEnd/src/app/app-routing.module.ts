import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
const routes: Routes = [
  {path: "registration", component: EnrollmentformComponent} ,
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'footer', component: FooterComponent },
  { path:'contactus', component: ContactusComponent },
  { path:'login', component: LoginComponent },
  {path:'studentsignup',component:StudentSignupComponent},
  {path:'studentsignin',component:StudentSigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
