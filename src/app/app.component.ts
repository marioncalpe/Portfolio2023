import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

import 'boxicons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  // windowScrolled!: boolean;
  title = 'Portfolio';
  showModal: boolean = false;
  isPanelOpen = false;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  ngOnInit() {
    this.showModal = false;
  }

  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {}

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

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (
  //     window.scrollY ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop > 100
  //   ) {
  //     this.windowScrolled = true;
  //   } else if (
  //     (this.windowScrolled && window.scrollY) ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop < 10
  //   ) {
  //     this.windowScrolled = false;
  //   }
  // }

  // scrollToTop() {
  //   (function smoothscroll() {
  //     let currentScroll =
  //       document.documentElement.scrollTop || document.body.scrollTop;

  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - currentScroll / 8);
  //     }
  //   })();
  // }
}
