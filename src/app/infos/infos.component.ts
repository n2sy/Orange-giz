import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myCandidat;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    //this.myId = this.actRoute.snapshot.paramMap.get('id');
    //this.myId = this.actRoute.snapshot.params['id'];

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.myCandidat = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  deleteCandidat() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatById(this.myCandidat);
      this.router.navigateByUrl('/cv');
    }
  }
}
