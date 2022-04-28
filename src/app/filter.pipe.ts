import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatut: string): any[] {
    if (!selStatut.length) return value;

    let newServers = [];
    for (const serv of value) {
      if (serv.statut == selStatut) {
        newServers.push(serv);
      }
    }
    return newServers;
  }
}
