import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacherForm: FormGroup;
  teacher: any={};
  id:any;
    constructor(
  private activatedRoute:ActivatedRoute,
  private teacherService:TeacherService
  
  
    ) { }
  
    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.teacherService.getTeacherById(this.id).subscribe();
    }
    editTeacher(){
  this.teacherService.updateTeacher(this.teacher).subscribe() ;
   }
  
  }
  
