import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FormsModule } from '@angular/forms';
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
<<<<<<< HEAD
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentLoginComponent } from './student-login/student-login.component';


>>>>>>> 767dee6458d0c6858db1f8e7db23b243aa8c34ee

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
    StudentSignupComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    FormsModule,
    HttpClientModule
>>>>>>> 767dee6458d0c6858db1f8e7db23b243aa8c34ee
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
