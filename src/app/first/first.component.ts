import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Anis';
  cl = 'pink';
  hd = true;
  constructor() {}

  ngOnInit(): void {}

  traitementDuBouton() {
    alert('Click détecté');
  }
}
