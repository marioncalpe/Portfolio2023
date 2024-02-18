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
    monify: { status: false },
    classroom: { status: false },
  };
  openMonify(event:MouseEvent):void{
    event.stopPropagation();
    this.modal.monify.status = true;
  }
  openClassroom(event:MouseEvent):void{
    event.stopPropagation();
    this.modal.classroom.status = true;
  }
}
