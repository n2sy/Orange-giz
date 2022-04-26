import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrls: ['./item-account.component.css'],
})
export class ItemAccountComponent implements OnInit {
  @Input() myAccount;
  constructor() {}

  ngOnInit(): void {}
  changeStatus(newStatus) {
    this.myAccount.status = newStatus;
  }
}
