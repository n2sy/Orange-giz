import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  selectedServ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gererSer: GererServersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServ = this.gererSer.getServerById(p.get('id'));
      },
    });
  }
}
