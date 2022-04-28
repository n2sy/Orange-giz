import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  afficherMsg() {
    console.log('Je suis le second service !');
  }
}
