import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employer } from '../models/employer.model';
import { EmployerService } from '../service/employer.service'; 
@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {

  employer!: Employer;

  constructor(private router:Router,public empService:EmployerService) { }
  pattern:any

  showSucessMessage!: boolean;
  serverErrorMessages!: string;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
        this.empService.selectedEmployer = {
        CompanyName: '',
        Email: '',
        Password: '',     
    }
    form.resetForm();
    this.serverErrorMessages='';
  }
  
  onSubmit(form : NgForm){
      this.empService.employerSignup(form.value)
      .subscribe(
        res=>{
          this.showSucessMessage=true
          setTimeout(() => this.showSucessMessage = false, 1000);
          this.resetForm(form);
          setTimeout(() => this.router.navigate(['/employerlogin']), 500);
          
          
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

  }



  
  onFocus(){
    let divid=document.getElementById('errdiv');
    if (divid!=null)
      divid.hidden=true
  }

}
