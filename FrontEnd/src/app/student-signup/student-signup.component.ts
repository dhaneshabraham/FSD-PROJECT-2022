import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  student!: Student;

  constructor(private router:Router,public studService:StudentService) { }
  pattern:any

  showSucessMessage!: boolean;
  serverErrorMessages!: string;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
        this.studService.selectedStudent = {
        StudentName: '',
        Email: '',
        Password: '',     
    }
    form.resetForm();
    this.serverErrorMessages='';
  }
  
  onSubmit(form : NgForm){
      this.studService.signupStudent(form.value)
      .subscribe(
        res=>{
          this.showSucessMessage=true
          setTimeout(() => this.showSucessMessage = false, 1000);
          this.resetForm(form);
          setTimeout(() => this.router.navigate(['/studentLogin']), 500);
          
          
        },
        err=>{
          if (err.status === 422) {
            let divid=document.getElementById('errdiv');
            if (divid!=null)
              divid.hidden=false
            this.serverErrorMessages = err.error;
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';

        }
      )
 
 
      
  //     this.router.navigate(['/studentLogin']); 
  }

  onFocus(){
    let divid=document.getElementById('errdiv');
    if (divid!=null)
      divid.hidden=true
  }

}