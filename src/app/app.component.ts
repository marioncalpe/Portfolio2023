import { Component } from '@angular/core';

import 'boxicons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  liste_bio = [
    'Développeur Front-End',
    'Curieuse',
    'Fan de jeu vidéo',
    'Passionée',
    'Fan de musique',
    'Dans le partage'
  ]
  
}
