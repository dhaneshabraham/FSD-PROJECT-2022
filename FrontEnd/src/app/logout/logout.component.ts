import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudAuthService } from '../service/stud-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private studAuth : StudAuthService, private router: Router) { }

  ngOnInit(): void {

    this.studAuth.deleteToken("");
    this.router.navigate(['\home']);

  }


}
