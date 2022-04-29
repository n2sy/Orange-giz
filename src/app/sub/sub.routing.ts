import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { ListServersComponent } from './list-servers/list-servers.component';
let sub_routes: Routes = [
  {
    path: 'list-servers',
    component: ListServersComponent,
    children: [
      { path: ':id', component: InfoServerComponent },
      { path: 'edit/:id', component: EditServerComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(sub_routes);
