import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactName : string = "";
  contactEmail : string = "";
  contactTelephone : string = "";
  contactSubject : string = "";
  contactContent : string = "";

  serverUrl : string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  sendMail() : void {

    const formData = new FormData(); 
    formData.append("contactName", this.contactName);
    formData.append("contactEmail", this.contactEmail);
    formData.append("contactTelephone", this.contactTelephone);
    formData.append("contactSubject", this.contactSubject);
    formData.append("contactContent", this.contactContent);

    let courseSaveUrl = this.serverUrl + "mail";

    this.http.post(courseSaveUrl, formData).subscribe({complete: console.info}); 
    
    this.reset();
  }

  reset() : void {
    this.contactName = "";
    this.contactEmail = "";
    this.contactTelephone = "";
    this.contactSubject = "";
    this.contactContent = "";
  }


}


