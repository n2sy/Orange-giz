import { Component, OnInit } from '@angular/core';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent implements OnInit {
  tabServers = [];

  constructor(private gererSer: GererServersService) {}

  ngOnInit(): void {
    this.tabServers = this.gererSer.tab;
  }
}
