import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private listCandidats = [
    new Candidat(1, 'jelassi', 'nidhal', 37, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'simpson', 'bart', 17, 'Eleve', 'bart.jpeg'),
    new Candidat(3, 'simpson', 'homer', 57, 'Sans travail'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.listCandidats;
  }

  addCandidat(newC) {
    newC._id = this.listCandidats[this.listCandidats.length - 1]._id + 1;
    this.listCandidats.push(newC);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }

  deleteCandidatById(Cand) {
    let i = this.listCandidats.indexOf(Cand);
    this.listCandidats.splice(i, 1);
  }

  deleteCandidatByIdV2(id) {
    this.listCandidats = this.listCandidats.filter((c) => c._id != id);
  }

  updateCandidat(cand) {
    let i = this.listCandidats.indexOf(cand);
    this.listCandidats[i] = cand;
  }
}
