import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private listCandidats = [
    // new Candidat(1, 'jelassi', 'nidhal', 37, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'simpson', 'bart', 17, 'Eleve', 'bart.jpeg'),
    // new Candidat(3, 'simpson', 'homer', 57, 'Sans travail'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.listCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  addCandidat(newC) {
    newC._id = this.listCandidats[this.listCandidats.length - 1]._id + 1;
    this.listCandidats.push(newC);
  }

  addCandidatAPI(newC) {
    // let token = localStorage.getItem('orange_token');
    // if (token) {
    //   let p = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, newC, { params: p });
    // }
    // let token = localStorage.getItem('orange_token');
    // if (token) {
    //   let p = new HttpHeaders().set('Authorization', 'bearer ' + token);
    //   return this.http.post(this.link, newC, { headers: p });
    // }
    return this.http.post(this.link, newC);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  deleteCandidatById(Cand) {
    let i = this.listCandidats.indexOf(Cand);
    this.listCandidats.splice(i, 1);
  }

  deleteCandidatByIdV2(id) {
    this.listCandidats = this.listCandidats.filter((c) => c._id != id);
  }
  deleteCandidatByIdAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updateCandidat(cand) {
    let i = this.listCandidats.indexOf(cand);
    this.listCandidats[i] = cand;
  }

  updateCandidatAPI(cand) {
    return this.http.put(`${this.link}/${cand._id}`, cand);
  }
}
