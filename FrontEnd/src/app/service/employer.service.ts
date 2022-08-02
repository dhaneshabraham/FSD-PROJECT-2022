import { Injectable } from '@angular/core';
import { Employer } from '../models/employer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  selectedEmployer:Employer={
    CompanyName:'',  
    Email:'',
    Password:''
  };
  serverAddress= "http://localhost:3000";
  constructor(private http:HttpClient) { }
  employerSignup(employer:Employer)
  {
    return this.http.post(`${this.serverAddress}/signupEmployer`,employer)
  }

  employersignin(employer:Employer)
  {
    return this.http.post(`${this.serverAddress}/signinEmployer`,employer)
  }
 
}
