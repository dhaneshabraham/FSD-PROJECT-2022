import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';

import { EmployersearchComponent } from './employersearch/employersearch.component';
import { FormsModule } from '@angular/forms';

import { StudentSignupComponent } from './student-signup/student-signup.component';

import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentLoginComponent } from './student-login/student-login.component';




@NgModule({
  declarations: [
    AppComponent,
    EnrollmentformComponent,
    StudentSigninComponent,
    HomeComponent,
    StudentSignupComponent,
    EmployersearchComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CoursesComponent,
    ContactusComponent,
    HomeHeaderComponent,
    FooterComponent,
    StudentSignupComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    FormsModule,
    FlexLayoutModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
