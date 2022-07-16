import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
<<<<<<< HEAD
import { EmployersearchComponent } from './employersearch/employersearch.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 00b750e77c05f790903be32be93dd2fcf046cf0c

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    StudentSignupComponent,
    StudentSigninComponent,
<<<<<<< HEAD
    EmployersearchComponent
=======
    HomeComponent
>>>>>>> 00b750e77c05f790903be32be93dd2fcf046cf0c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
