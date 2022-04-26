import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent implements OnInit {
  tabAccounts = [
    {
      nom: 'Nidhal Account',
      status: 'active',
    },
    {
      nom: 'Hatem Account',
      status: 'unknown',
    },
    {
      nom: 'Mourad Account',
      status: 'inactive',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  recupNewAccount(c) {
    this.tabAccounts.push(c);
  }
}
