import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { teachers } from 'src/app/data/teachersDataSource'
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  // teacher: any = {};
  // teacherForm : FormGroup;
  // constructor() { }

  // ngOnInit() {
  // }
  // addTeacher(){
  //   let T = JSON.parse(localStorage.getItem("teachers")|| "[]")
  //   let teacherId=JSON.parse(localStorage.getItem("teacherId")||"1")
  //   this.teacher.id=teacherId
  //   T.push(this.teacher)
  //   localStorage.setItem("teachers",JSON.stringify(T))
  //   localStorage.setItem("techerId",JSON.stringify(teacherId+1))
  //     console.log("here object",this.teacher);
  //   }
  //   }

  teachers=teachers;
  teacher:any={};
  teacherId : any;
  title:String = "Add teacher";
  
  
  constructor(private activatedRouter : ActivatedRoute,private teacherService:TeacherService ,private router:Router) { }

  ngOnInit() {
    this.teacherId = this.activatedRouter.snapshot.paramMap.get('id');
    if (this.teacherId){
      this.teacherService.getTeacherById(this.teacherId).subscribe(
        //  (data) => { this.teacher= data; }
         );
      /*
      this.teacher = teachers.find(  (obj) => {return obj.id == this.teacherId})
      this.title = `Edit Teacher ${this.teacherId}`  ;
      */
    }
  }

  addOrEditTeacher()
  {
    if (this.teacherId){
      this.teacherService.updateTeacher(this.teacher).subscribe( 
      //   (data) => { console.log('Here teacher : ',data); },
      // (err) => { console.log('add teacher error : ',err); } 
      );

    }else
    {
      this.teacherService.addTeacher(this.teacher).subscribe(
      //    (data) => { console.log('Here teacher: ',data); },
      // (err) => { console.log('add teacher error : ',err); } 
      );

    }

    this.router.navigate(["admin"]);
        
  }
}