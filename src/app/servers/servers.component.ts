import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  tabServers = [
    {
      name: 'Developement Server',
      type: 'medium',
      date_d: new Date(2022, 4, 12),
      statut: 'critical',
    },
    {
      name: 'Test Server',
      type: 'large',
      date_d: new Date(2022, 4, 12),
      statut: 'stable',
    },
    {
      name: 'Production Server',
      type: 'medium',
      date_d: new Date(2022, 1, 31),
      statut: 'offline',
    },
    {
      name: 'Developement Server',
      type: 'small',
      date_d: new Date(2022, 4, 12),
      statut: 'stable',
    },
  ];

  selectedStatut;
  constructor() {}

  ngOnInit(): void {}

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-danger': st == 'critical' ? true : false,
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }
}
