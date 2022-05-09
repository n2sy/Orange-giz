import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  tabCandidats = [];
  @Output() msgToCv = new EventEmitter();
  constructor(private candSer: ListCandidatsService) {}

  ngOnInit(): void {
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  sendToCv(cand) {
    this.msgToCv.emit(cand);
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
