import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { MyHomeStudComponent } from './my-home-stud/my-home-stud.component';
import { MyHomeStudProfileComponent } from './my-home-stud-profile/my-home-stud-profile.component';
import { EditmyHomeStudComponent } from './editmy-home-stud/editmy-home-stud.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';


export const appRoutes: Routes = [
    // {path:'',component:StudentSignupComponent},
    {path:'',component:HomeComponent,
    children:[{path:'',component:HomeMainComponent},
              {path:'courses',component:CoursesComponent},
              {path:'features',component:FeaturesComponent},
              {path:'aboutus',component:AboutusComponent}]},
    {path:'studentsignin',component:StudentSigninComponent},
    {path:'studentsignup',component:StudentSignupComponent},
    {path:'studentprofile',component:StudentProfileComponent,canActivate:[AuthGuard],
    children:[{path:'',component:MyHomeStudComponent,canActivate:[AuthGuard]},
              {path:'myhome',component:MyHomeStudComponent,canActivate:[AuthGuard]},
              {path:'myhomeprofile',component:MyHomeStudProfileComponent,canActivate:[AuthGuard]},
              {path:'myhomeedit',component:EditmyHomeStudComponent,canActivate:[AuthGuard]}]},
    { path: 'enroll', component: StudentEnrollmentComponent,canActivate:[AuthGuard] }
   
];