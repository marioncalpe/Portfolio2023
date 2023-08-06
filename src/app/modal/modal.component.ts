import { Component, HostListener, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  selector: 'modal',
})
export class ModalComponent {
  @Input() isVisible: boolean = false;

  close() {
    this.isVisible = false;
  }
  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    // Vérifier si l'élément cliqué est à l'intérieur de la modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(target)) {
      // Si l'élément cliqué est à l'extérieur de la modal, fermer la modal
      this.close();
    }
  }
}