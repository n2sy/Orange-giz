import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() selectedCand;
  constructor(private recSer: RecrueService, private router: Router) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.recSer.addRecrue(this.selectedCand);
  }

  goToInfos() {
    this.router.navigate(['/cv', this.selectedCand['_id']]);
  }
}
