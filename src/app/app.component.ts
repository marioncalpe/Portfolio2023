import { Component, ElementRef, OnInit } from '@angular/core';

import 'boxicons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  showModal: boolean = false;
  isPanelOpen = false;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  ngOnInit() {
    this.showModal = false;
  }

  constructor(private elementRef: ElementRef) {}

  on() {
    this.elementRef.nativeElement.querySelector("#overlay").style.display = "block";
  }

  off() {
    this.elementRef.nativeElement.querySelector("#overlay").style.display = "none";
  }

  public modal = {
    portfolio: { status: false },
    classroom: { status: false },
  };
  openPortfolio(event:MouseEvent):void{
    event.stopPropagation();
    this.modal.portfolio.status = true;
  }
}
