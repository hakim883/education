import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  createDb(){

    let courses= [
      { id:1 , title: "hey", teacher_id: "hh", description: "F", number_place: 2},
      
    ]; 
    let teachers= [
      { id:1,name: "hh", speciality: "ll", experience: "F", email: "R@a"},
     
    ]; 
    return {courses,teachers};

}
}
