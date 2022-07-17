import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CoursesComponent,
    ContactusComponent,
    HomeHeaderComponent,
    FooterComponent,
    StudentSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
