import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  editedCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.editedCandidat = response;
          },
          error: (err) => {
            console.log('Probleme avec getCandidatById');
          },
        });
      },
      error: (err) => {
        console.log('Probleme avec paramMap');
      },
    });
  }

  updateCandidat() {
    console.log(this.editedCandidat);
    this.candSer.updateCandidatAPI(this.editedCandidat).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Problem avec updateCandidat');
      },
    });
  }
}
