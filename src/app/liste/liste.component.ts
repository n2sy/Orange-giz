import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabCandidats = [];
  @Output() msgToCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendToCv(cand) {
    this.msgToCv.emit(cand);
  }
}
