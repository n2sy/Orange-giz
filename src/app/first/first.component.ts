import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Anis';
  cl = 'green';
  hd = true;
  s;
  constructor() {}

  ngOnInit(): void {}

  traitementDuBouton() {
    alert('Click détecté');
  }

  traitement(a) {
    //alert(msg);
    this.s = a;
  }
}
