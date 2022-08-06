// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';

//routes
import { appRoutes } from './routes';


import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { MyHomeStudComponent } from './my-home-stud/my-home-stud.component';
import { EditmyHomeStudComponent } from './editmy-home-stud/editmy-home-stud.component';
import { MyHomeStudProfileComponent } from './my-home-stud-profile/my-home-stud-profile.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentSignupComponent,
    StudentSigninComponent,
    StudentProfileComponent,
    StudentEnrollmentComponent,
    MyHomeStudComponent,
    EditmyHomeStudComponent,
    MyHomeStudProfileComponent,
    HomeComponent,
    HomeMainComponent,
    CoursesComponent,
    FeaturesComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
