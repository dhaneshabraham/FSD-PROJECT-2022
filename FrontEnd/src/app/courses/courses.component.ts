import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../models/course";
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input()
  courseList: Course[] = [];  

  serverUrl : string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

   this.loadCourses();

    
  }


  loadCourses() : void{
      this.http.get<Course>(this.serverUrl+"courses").subscribe((data : any) => {        
        this.courseList = data;
        console.log(this.courseList);        
    })
  }


  deleteCourse(course_name: string) : void{
      console.log(course_name);
      if(confirm("Are you sure to delete "+course_name)) {
        const options = {
            body : {
                courseName : course_name
            }
        }
        this.http.delete(this.serverUrl+"courses", options).subscribe((data : any) => {        
          console.log(data);
          this.loadCourses();          
      });
    }
  }

  onCourseAdd(even: any) : void {
      this.loadCourses();
  }

}
