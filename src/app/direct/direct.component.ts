import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  bg = 'pink';
  cl = 'grey';
  constructor() {}

  ngOnInit(): void {}

  changeStyle() {
    this.bg = 'red';
  }
}
