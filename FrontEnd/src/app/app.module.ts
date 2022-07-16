import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
<<<<<<< HEAD
import { EmployersearchComponent } from './employersearch/employersearch.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
=======
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { Form, FormsModule } from '@angular/forms';
import { StudentSignupComponent } from './student-signup/student-signup.component';
=======
>>>>>>> 00b750e77c05f790903be32be93dd2fcf046cf0c
>>>>>>> c5f9aef94513db15e1269567adb3953ebd910e81

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    StudentSigninComponent,
    HomeComponent,
    StudentSignupComponent
=======
<<<<<<< HEAD
    EmployersearchComponent
=======
    HomeComponent
>>>>>>> 00b750e77c05f790903be32be93dd2fcf046cf0c
>>>>>>> c5f9aef94513db15e1269567adb3953ebd910e81
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
