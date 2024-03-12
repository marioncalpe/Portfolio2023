import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import emailjs from '@emailjs/browser';
import 'boxicons';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // windowScrolled!: boolean;
  title = 'Portfolio';
  showModal: boolean = false;
  isPanelOpen = false;
  form: FormGroup = new FormGroup({
    from_name: new FormControl(""),
    to_name: new FormControl(""),
    from_email: new FormControl(""),
    subject: new FormControl(""),
    message: new FormControl("")
  });

  async send() {
    emailjs.init('QMCtu6ZSfXPvxrtxQ');
    let response = await emailjs.send('service_2ur1gzn', 'template_s51fabs', {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    alert('Message has been sent');
    this.form.reset();
  }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  ngOnInit() {
    this.showModal = false;
  }

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder
  ) {}

  on() {
    this.elementRef.nativeElement.querySelector('#overlay').style.display =
      'block';
  }

  off() {
    this.elementRef.nativeElement.querySelector('#overlay').style.display =
      'none';
  }

  public modal = {
    monify: { status: false },
    classroom: { status: false },
  };
  openMonify(event: MouseEvent): void {
    event.stopPropagation();
    this.modal.monify.status = true;
  }
  openClassroom(event: MouseEvent): void {
    event.stopPropagation();
    this.modal.classroom.status = true;
  }
}
