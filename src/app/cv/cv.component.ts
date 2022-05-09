import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { ListCandidatsService } from '../list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listeCandidats: any = [];
  selectedCandidat: Candidat;
  constructor(
    //private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    //this.firstSer.showMessage();
    //this.listeCandidats = this.candSer.getAllCandidats();
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        this.listeCandidats = response;
      },
    });
  }

  RecupCandidat(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }

  addCandidat() {
    this.candSer.addCandidat(new Candidat(4, 'aaaa', 'bbbb', 44, 'xxxxx'));
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
