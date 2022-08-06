import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/reactjs.jpg'},
  ]
}
