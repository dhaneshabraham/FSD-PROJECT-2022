import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-enrollmentform',
  templateUrl: './enrollmentform.component.html',
  styleUrls: ['./enrollmentform.component.css']
})
export class EnrollmentformComponent implements OnInit {

  _id:any=''
  name:any=''
  details:any=''
  price:any=''
  eligibility:any=''

  courses=(this._id,this.name,this.details,this.price,this.eligibility)
  fees:any=''
  constructor(private router:Router) { }
  
  
  // formGroup 
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')]),
    address: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    qualification: new FormControl(''),
    passout: new FormControl(''),
    skillset: new FormControl(''),
    employmentStatus: new FormControl(''),
    technologyTraining:new FormControl(''),
    course:new FormControl(''),
    image:new FormControl('')
  })

  get email(){ 
    return this.loginForm.get('email');
  }
  
  get password(){ 
    return this.loginForm.get('password');
  }
  
  get phone(){ 
    return this.loginForm.get('phone');
  }

  ngOnInit(): void {
    
  }
  
}




