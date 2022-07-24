import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList: Course[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

   this.http.get<Course>("../../assets/mock_data/courses.json").subscribe((data : any) => {
      this.courseList = data;
      console.log(this.courseList)
   })

    
  }

}
