import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AccesGuard } from './acces.guard';
import { NotAccesGuard } from './not-acces.guard';
import { LeaveLoginGuard } from './leave-login.guard';

let myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [AccesGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },

  {
    path: 'list-servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'servers', component: ServersComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAccesGuard],
    canDeactivate: [LeaveLoginGuard],
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const ORANGE_ROUTING = RouterModule.forRoot(myRoutes);
