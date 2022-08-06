import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentService } from './service/student.service';
import { EmployerService } from './service/employer.service';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCarouselModule } from 'ng-mat-carousel';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



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
    StudentLoginComponent,
    StudentProfileComponent,
    EmployerSignupComponent,
    EmployerLoginComponent,
    LogoutComponent,
    AddcourseComponent
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
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatCarouselModule.forRoot(),
    MatCarouselModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [StudentService, EmployerService],
  bootstrap: [AppComponent]
})
export class AppModule { }