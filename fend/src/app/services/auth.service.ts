import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http:HttpClient) { }

  userUrl: string = "http://localhost:8091/api/auth";
  
  // let user = {email ,password}
    // login(user){
    //   return this.http.post(this.userUrl + "/login",user);
    // }
  //  user = {firsname,lastname , email ,password ,role}
    signup(user): Observable<any>{
      return this.http.post(this.userUrl + "/signup",user);
    }
    register(user): Observable<any> {
      return this.http.post(this.userUrl + "signup", user);
    }
  
    login(user) {
      return this.http.post<{accessToken:any}>(this.userUrl + "login", user);
    }
  
    // register(user): Observable<any> {
    //   return this.http.post(this.userUrl + "/register", user);
    // }
  }