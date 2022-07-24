import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent, Orientation } from 'ng-mat-carousel';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }


  public slidesList = new Array<never>(5);
  public showContent = false;
  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = true;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = false;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = 8;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  public darkMode = false;


  ngOnInit(): void {
  }

}
