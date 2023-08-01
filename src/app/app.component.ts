import { Component, ElementRef, OnInit } from '@angular/core';

import 'boxicons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit() {
  }

  constructor(private elementRef: ElementRef) {}

  on() {
    this.elementRef.nativeElement.querySelector("#overlay").style.display = "block";
  }

  off() {
    this.elementRef.nativeElement.querySelector("#overlay").style.display = "none";
  }
}
