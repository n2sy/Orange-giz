import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listeCandidats: Candidat[] = [
    new Candidat(1, 'jelassi', 'nidhal', 37, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'simpson', 'bart', 17, 'Eleve', 'bart.jpeg'),
    new Candidat(3, 'simpson', 'homer', 57, 'Sans travail', 'homer.jpg'),
  ];
  selectedCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {}

  RecupCandidat(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }
}
