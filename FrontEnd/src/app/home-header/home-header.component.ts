import { Component, OnInit } from '@angular/core';
import { StudAuthService } from '../service/stud-auth.service';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor(public studAuthService : StudAuthService) { }

  ngOnInit(): void {
  }



}
