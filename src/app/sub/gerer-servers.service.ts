import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GererServersService {
  tab = [
    {
      id: 1,
      nom: 'Serveur de production',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de développement',
      statut: 'online',
    },
  ];
  constructor() {}

  getServerById(id) {
    return this.tab.find((s) => s.id == id);
  }
}
