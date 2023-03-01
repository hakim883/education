import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: any = {};
  courseForm : FormGroup;
    constructor() { }
  
    ngOnInit() {
    }
  addCourse(){
    let T = JSON.parse(localStorage.getItem("courses")|| "[]")
    let courseId=JSON.parse(localStorage.getItem("courseId")||"1")
    this.course.id=courseId
    T.push(this.course)
    localStorage.setItem("courses",JSON.stringify(T))
    localStorage.setItem("courseId",JSON.stringify(courseId+1))
    console.log("here object",this.course);
  }
  }
  