import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher: any = {};
  teacherForm : FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addTeacher(){
    let T = JSON.parse(localStorage.getItem("teachers")|| "[]")
    let teacherId=JSON.parse(localStorage.getItem("teacherId")||"1")
    this.teacher.id=teacherId
    T.push(this.teacher)
    localStorage.setItem("teachers",JSON.stringify(T))
    localStorage.setItem("techerId",JSON.stringify(teacherId+1))
      console.log("here object",this.teacher);
    }
    }