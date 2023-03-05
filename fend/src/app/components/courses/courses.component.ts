import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   coursesTab:any =[];




courses: any; 
colNLS: any;
dataSource: any;
constructor(private courseService:CourseService) {}
//   constructor( private courseService:CourseService) { }

//   ngOnInit() {
//     this.coursesTab =JSON.parse(localStorage.getItem("courses")||"[]")
  
//   this.courseService.getAllCourses().subscribe();
//   }
 

ngOnInit() {
   //this.colNLS = [
  //   { id: "Id", nls: "Id" },
  //   { id: "title", nls: "title" },
  //   { id: "description", nls: "description" },
  //   { id: "teacher_id", nls: "teacher_id" },
  //   { id: "price", nls: "price" },
  //   { id: "number_place", nls: "number_place" }
  // ];
  // this.courses = [
  //   { Id:1,title: "a", description: "A", teacher_id: k, price: 1899,number_place: 1}

  // ];


  //   // getAllCourses(){
    //   //   this.coursesTab=JSON.parse(localStorage.getItem("courses")||"[]")
    //   // }
  this.courseService.getAllCourses().subscribe((data) => {
    this.courses = data;
    this.dataSource = { colDef: this.colNLS, myObjects: this.courses };
  });
}

display(obj: any) {
  alert(obj.Id + " " + obj.Name);
}
}

