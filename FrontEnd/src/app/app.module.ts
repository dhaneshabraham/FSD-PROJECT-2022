import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { EmployersearchComponent } from './employersearch/employersearch.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    StudentSignupComponent,
    StudentSigninComponent,
    EmployersearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
