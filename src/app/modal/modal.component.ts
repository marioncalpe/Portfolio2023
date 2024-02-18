import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  selector: 'modal',
})
export class ModalComponent {
  @Input() date: string =''; // Propriété d'entrée pour la date
  @Output() onClose: EventEmitter<null> = new EventEmitter();

  close() {
    this.onClose.emit();
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
