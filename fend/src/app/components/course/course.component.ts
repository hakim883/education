import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() courseInput : any;

  constructor() { }

  ngOnInit() {
    
  }
  compare(a){
    console.log(a  );

    if ((a>0)&&(a<500)){
      return ['red'] ;
    }
    else if (a>=500) {
      return ['yello'];
    }
    else{
      return "err";
    }
  }
}
