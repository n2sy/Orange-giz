import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  bg;
  cl;
  fSize;
  font;
  constructor() {}

  ngOnInit(): void {}

  changeSize(newSize) {
    this.fSize = newSize + 'px';
  }
}
