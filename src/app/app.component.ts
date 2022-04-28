import { Component } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kalthoum';
  name;
}
