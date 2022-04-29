import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  selectedServ;
  show;
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

    this.activatedRoute.queryParamMap.subscribe({
      next: (q) => {
        this.show = q.get('allow') == '1' ? false : true;
      },
    });
  }
}
