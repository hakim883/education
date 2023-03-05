import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
 
   
    teachers: any; 
  colNLS: any;
  dataSource: any;
  constructor(private teacherService:TeacherService) {}


  // teachersTab:any =[];
    //   constructor( private teacherService:TeacherService) { }
    


     //   ngOnInit() {
    //     // this.getAllTeachers();
    //     this.teachersTab =JSON.parse(localStorage.getItem("teachers")||"[]")
      
    //   this.teacherService.getAllTeachers().subscribe();
    //   }
  ngOnInit() {
      //this.colNLS = [
  //   { id: "id", nls: "id" },
  //   { id: "name", nls: "name" },
  //   { id: "speciality", nls: "speciality" },
  //   { id: "experience", nls: "experience" },
  //   { id: "email", nls: "email" }
  // ];
  // this.courses = [
  //   { Id:1,name: "a", speciality: "A", experience: k, email: q@q}

  // ];


   //   // getAllTeachers(){
    //   //   this.teachersTab=JSON.parse(localStorage.getItem("teachers")||"[]")
    //   // }
    
   
    this.teacherService.getAllTeachers().subscribe((data) => {
      this.teachers = data;
      // this.dataSource = { colDef: this.colNLS, myObjects: this.teachers };
    });
  }

  display(obj: any) {
    alert(obj.Id + " " + obj.Name);
  }
}
