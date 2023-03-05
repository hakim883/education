import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherUrl:string= "http://localhost:8091/api/teachers";
  constructor(private httpClient:HttpClient) { }
addTeacher(teacher:any){
  return this.httpClient.post(this.teacherUrl + "/add",teacher);
}
//response: array of objects
getAllTeachers(){
  return this.httpClient.get(this.teacherUrl);
}
getTeacherById(id){
  return this.httpClient.get(`${this.teacherUrl}/${id}`);
}
updateTeacher(newTeacher){
  return this.httpClient.put(`${this.teacherUrl}/${newTeacher.id}`,newTeacher);
}
//response :boolean
deleteTeacher(id){
  return this.httpClient.delete(`${this.teacherUrl}/${id}`);
}
//response : array of object
searchTeacher(teacher){
  return this.httpClient.post(this.teacherUrl,teacher);
}
}
