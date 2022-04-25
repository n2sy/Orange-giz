import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() msgToListe = new EventEmitter<Candidat>(); // ou new EventEmitter()
  constructor() {}

  ngOnInit(): void {}

  sendToListe() {
    this.msgToListe.emit(this.oneCandidat);
  }
}
