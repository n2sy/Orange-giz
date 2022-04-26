import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  typeStatus = ['', 'active', 'inactive', 'unknown'];
  @Output() msgToHome = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addAccount(i, s) {
    this.msgToHome.emit({ nom: i, status: s });
  }
}
