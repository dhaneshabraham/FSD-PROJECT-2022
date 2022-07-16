import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { HomeComponent } from './home/home.component';
import { Form, FormsModule } from '@angular/forms';
import { StudentSignupComponent } from './student-signup/student-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    StudentSigninComponent,
    HomeComponent,
    StudentSignupComponent
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
