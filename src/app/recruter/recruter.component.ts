import { Component, OnInit } from '@angular/core';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent implements OnInit {
  listRecrues = [];
  constructor(private recSer: RecrueService) {}

  ngOnInit(): void {
    this.listRecrues = this.recSer.tabRecrues;
  }
}
