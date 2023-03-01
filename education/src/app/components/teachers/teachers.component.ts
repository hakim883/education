import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
    teachersTab:any =[];
      constructor( private teacherService:TeacherService) { }
    
      ngOnInit() {
        // this.getAllTeachers();
        this.teachersTab =JSON.parse(localStorage.getItem("teachers")||"[]")
      
      this.teacherService.getAllTeachers().subscribe();
      }
      // getAllTeachers(){
      //   this.teachersTab=JSON.parse(localStorage.getItem("teachers")||"[]")
      // }
    
    }