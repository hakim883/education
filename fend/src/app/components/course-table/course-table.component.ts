import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
 courses:any = [];
 constructor(
   private courseService:CourseService,
   private router:Router
   ) { }
 ngOnInit() {
   this.courseService.getAllCourses().subscribe();
 }

 deleteCourse(id){
this.courseService.deleteCourse(id).subscribe();


 }
 goToDisplay(id){
   this.router.navigate([`courseInfo/${id}`]);
 }
 goToEdit(id){
   this.router.navigate([`editCourse/${id}`]);
 }


 }

     
     
   
   



   

 
 

 
