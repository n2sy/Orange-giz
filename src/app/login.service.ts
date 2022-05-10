import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth/login';
  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(this.link, identifiants);
  }

  estConnecte() {
    let token = localStorage.getItem('orange_token');
    if (token) return true;
    else return false;
  }

  seDeconnecter() {
    localStorage.removeItem('orange_token');
  }
}
