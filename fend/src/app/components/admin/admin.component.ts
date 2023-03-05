import { Component, OnInit } from '@angular/core';
export interface Course {
  Id:number;
  title: string;
  teacher_id: string;
  description: String;
  number_place: number;
} 

export interface Teacher {
  Id:number;
  Name: string;
  Speciality: string;
  Experience:string;
  Email:string;
 
} 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  actualDate : Date;

    constructor() { }

  ngOnInit() {
    this.actualDate = new Date();

  }

}
