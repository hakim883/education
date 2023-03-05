import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  id:any;
  course : any
    constructor(
       private activaetdRouet:ActivatedRoute,
       private courseService:CourseService
       ) { }
  
    ngOnInit() {
      this.id=this.activaetdRouet.snapshot.paramMap.get("id");
       console.log("here id",this.id);
      this.courseService.getCourseById(this.id).subscribe();
      
    }
  
  }
  