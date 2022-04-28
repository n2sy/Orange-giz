import { Component, Input, OnInit } from '@angular/core';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() selectedCand;
  constructor(private recSer: RecrueService) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.recSer.addRecrue(this.selectedCand);
  }
}
