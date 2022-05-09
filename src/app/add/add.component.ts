import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private candSer: ListCandidatsService, private router: Router) {}

  ngOnInit(): void {}

  addNewCandidat(newC) {
    // console.log(newC);
    // this.candSer.addCandidat(newC);
    this.candSer.addCandidatAPI(newC).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Probleme avec addCandidat', err);
      },
    });
  }
}
