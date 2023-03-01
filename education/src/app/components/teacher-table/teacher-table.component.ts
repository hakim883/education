import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {
  teachers:any = [];
  constructor(
    private teacherService:TeacherService,
    private router:Router
    ) { }
  ngOnInit() {
    this.teacherService.getAllTeachers().subscribe();
  }

  deleteTeacher(id){
this.teacherService.deleteTeacher(id).subscribe();


  }
  goToDisplay(id){
    this.router.navigate([`teacherInfo/${id}`]);
  }
  goToEdit(id){
    this.router.navigate([`editteacher/${id}`]);
  }

 
  }

      
      
    
    



    
 
  
  
 
  






