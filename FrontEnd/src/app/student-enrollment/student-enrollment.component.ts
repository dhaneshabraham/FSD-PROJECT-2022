import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {
  userDetails
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        });
        
  }
  
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/studentsignin']);
  }
  onSubmit(form: NgForm) {     
    const model={
      fullName: this.userDetails.fullName,
      email:this.userDetails.email,
      phone:form.controls['phone'].value,
      address:form.controls['address'].value,
      qualification:form.controls['qualification'].value,
      passout:form.controls['passout'].value,
      skills:form.controls['skills'].value,
      employmentStatus:form.controls['employmentStatus'].value,
      techtraining:form.controls['techtraining'].value,
      course:form.controls['course'].value,
      image:form.controls['image'].value,
      exitexammark:0,
      status:2
      };
    this.userService.studEnrollment(this.userDetails._id,model).subscribe((data)=>{
      console.log(data)
      alert('data modified')
      this.router.navigateByUrl('studentprofile');
    })
  }
}
