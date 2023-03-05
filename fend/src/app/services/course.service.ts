import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseUrl:string= "http://localhost:8091/api/courses";
  constructor(private httpClient:HttpClient) { }
addCourse(course:any){
  return this.httpClient.post(this.courseUrl + "/addcourse",course);
}
//response: array of objects
getAllCourses(){
  return this.httpClient.get(this.courseUrl);
}
getCourseById(id){
  return this.httpClient.get(`${this.courseUrl}/${id}`);
}
updateCourse(newCourse){
  return this.httpClient.put(`${this.courseUrl}`,newCourse);
}
//response :boolean
deleteCourse(id){
  return this.httpClient.delete(`${this.courseUrl}/${id}`);
}
//response : array of object
searchCourse(course){
  return this.httpClient.post(this.courseUrl,course);
}
}
