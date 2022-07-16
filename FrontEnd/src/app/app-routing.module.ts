import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
const routes: Routes = [
  {path: "registration", component: EnrollmentformComponent} ,
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'footer', component: FooterComponent },
  { path:'contactus', component: ContactusComponent },
<<<<<<< HEAD
  { path:'login', component: LoginComponent }

=======
  { path:'login', component: LoginComponent },
  {path:'employerlogin', component: EmployerLoginComponent}
>>>>>>> 6cd038219f24468dd2e2bfccea573b2fe807ed33
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
