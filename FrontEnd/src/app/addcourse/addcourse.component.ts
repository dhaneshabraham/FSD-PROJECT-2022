import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  courseName : string = "";
  courseFee : number = 0;
  courseDuration : any = null;
  courseMode : any = null;
  courseImageName : string = "";
  serverUrl : string = "http://localhost:3000/";

  @Output() courseAdded = new EventEmitter<any>();


  ngOnInit(): void {
  }

  saveCourse() : void {
    const formData = new FormData(); 
    formData.append("courseName", this.courseName);
    formData.append("courseFee", this.courseFee.toString());
    formData.append("courseDuration", this.courseDuration);
    formData.append("courseMode", this.courseMode);
    formData.append("courseImage", this.courseImageName);

    let courseSaveUrl = this.serverUrl + "courses";

    this.http.post(courseSaveUrl, formData).subscribe({complete: console.info}); 

    this.courseAdded.emit(true);

    this.reset();
  }

  reset() : void {
     this.courseName = "";
     this.courseFee = 0;
     this.courseDuration = "";
     this.courseMode = "";
     this.courseImageName = "";

     (<HTMLInputElement>document.getElementById("imageComp")).value = "";
  }

  uploadFile(event: any) : void {
      let imageFile : File = event.target.files[0];
      
      console.log(imageFile);
      if(imageFile != null){
        this.courseImageName = imageFile.name;
        console.log(this.courseImageName);
        const formData = new FormData(); 
        formData.append("file", imageFile, imageFile.name);
        let uploadUrl = this.serverUrl + "uploadCourseImage";
  
        const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
  
        this.http.post(uploadUrl, formData, { headers: headers }).subscribe({complete: console.info}); 
      }      
                             
  }

}
