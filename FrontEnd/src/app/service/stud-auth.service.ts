import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudAuthService {


  serverAddress= "http://localhost:3000";
  constructor(private http:HttpClient) { }

   

  studLogin(studUser:Student)
  {
    return this.http.post(`${this.serverAddress}/studentLogin`,studUser)
    // .subscribe(data =>{console.log(data)})
  }
  setToken(token:string){
    localStorage.setItem('token',token)
  }
  deleteToken(token:string){
    localStorage.removeItem('token')
  }
  getUserPayLoad(){
    var token=localStorage.getItem('token')
    if(token)
    {
      var userPayLoad=atob(token.split('.')[1]);
      return JSON.parse(userPayLoad)
    }
    else
      return null;
  }
  isLoggedIn() {
    var userPayload = this.getUserPayLoad();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  
}
