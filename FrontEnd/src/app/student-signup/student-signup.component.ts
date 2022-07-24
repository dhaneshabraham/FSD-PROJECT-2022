import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {



  constructor(private router:Router,public studentService:StudentService) { }
  pattern:any

  showSucessMessage!: boolean;
  serverErrorMessages!: string;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  ngOnInit(): void {
  }


  resetForm(form: NgForm) {
        this.studentService.selectedStudent = {
        StudentName: '',
        Email: '',
        Password: '',     
    }
    form.resetForm();
    this.serverErrorMessages='';
  }
  
  onSubmit(form : NgForm){
      this.studentService.signupStudent(form.value)
      .subscribe(
        res=>{
          this.showSucessMessage=true
          setTimeout(() => this.showSucessMessage = false, 1000);
          this.resetForm(form);
          setTimeout(() => this.router.navigate(['/studentLogin']), 500);
          
          
        },
        err=>{
          if (err.status === 422) {
            this.serverErrorMessages = err.error;
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';

        }
      )
      // this.router.navigate(['/studentLogin']); 
  }

}
