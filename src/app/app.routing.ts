import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { MsWordComponent } from './ms-word/ms-word.component';

let myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
];

export const ORANGE_ROUTING = RouterModule.forRoot(myRoutes);
