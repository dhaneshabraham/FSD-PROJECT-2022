import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  model={
    email:'',
    password:''
  }

  constructor(public studService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages!:string
  userName!:string
  onSubmit(form : NgForm){
    this.studService.studentsignin(form.value)
    .subscribe(
      (res:any)=>{
       
        // localStorage.setItem('studenttoken', res.token)
        // localStorage.setItem('id',res.id)
        this.router.navigateByUrl('/studentProfile');
      },
      err=>{
        console.log(err);
        this.serverErrorMessages=err.error
      })     
  }
}



