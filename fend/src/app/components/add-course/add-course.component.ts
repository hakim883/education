import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import{courses} from 'src/app/data/coursesDataSource'
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  // course: any = {};
  // courseForm : FormGroup;
  //   constructor() { }
  
  //   ngOnInit() {
  //   }
  
  

  courses=courses;
  course:any={};
  courseId : any;
  title:String = "Add course";
  
  
  constructor(private activatedRouter : ActivatedRoute,private courseService:CourseService ,private router:Router) { }

  ngOnInit() {
    this.courseId = this.activatedRouter.snapshot.paramMap.get('id');
    if (this.courseId){
      this.courseService.getCourseById(this.courseId).subscribe(
         (data) => { this.course = data; }
         );
      /*
      this.course = courses.find(  (obj) => {return obj.id == this.courseId})
      this.title = `Edit Course ${this.courseId}`  ;
      */
    }
  }
  // addCourse(){
  //   let T = JSON.parse(localStorage.getItem("courses")|| "[]")
  //   let courseId=JSON.parse(localStorage.getItem("courseId")||"1")
  //   this.course.id=courseId
  //   T.push(this.course)
  //   localStorage.setItem("courses",JSON.stringify(T))
  //   localStorage.setItem("courseId",JSON.stringify(courseId+1))
  //   console.log("here object",this.course);
  // }
  

  addOrEditCourse()
  {
    if (this.courseId){
      this.courseService.updateCourse(this.course).subscribe( 
        (data) => { console.log('Here course : ',data); },
      (err) => { console.log('add course error : ',err); } 
      );

    }else
    {
      this.courseService.addCourse(this.course).subscribe( 
        (data) => { console.log('Here course: ',data); },
      (err) => { console.log('add course error : ',err); }
       );

    }

   // this.router.navigate(["admin , user"]);
        
  }
}