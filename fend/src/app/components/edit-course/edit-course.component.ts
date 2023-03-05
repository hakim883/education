import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courseForm: FormGroup;
  course: any={};
  id:any;
    constructor(
  private activatedRoute:ActivatedRoute,
  private courseService:CourseService
  
  
    ) { }
  
    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.courseService.getCourseById(this.id).subscribe();
    }
    editCourse(){
  this.courseService.updateCourse(this.course).subscribe() ;
   }
  
  }
  