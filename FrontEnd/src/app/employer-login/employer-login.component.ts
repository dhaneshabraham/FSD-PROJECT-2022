import { Component, OnInit } from '@angular/core';
import { Employer } from '../models/employer.model';
import { EmployerService } from '../service/employer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  constructor(public empService:EmployerService,private router:Router) { }

  ngOnInit(): void {
  }
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages!:string
  userName!:string
  onSubmit(form : NgForm){
    this.empService.employersignin(form.value)
    .subscribe(
      (res:any)=>{
       
        // localStorage.setItem('employertoken', res.token)
        // localStorage.setItem('id',res.id)
        this.router.navigateByUrl('/studentProfile');
      },
      err=>{
        console.log(err);
        this.serverErrorMessages=err.error
      })     
  }
}



