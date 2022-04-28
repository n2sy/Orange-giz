import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myId;
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //this.myId = this.actRoute.snapshot.paramMap.get('id');
    //this.myId = this.actRoute.snapshot.params['id'];

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.myId = p.get('id');
      },
    });
  }
}
