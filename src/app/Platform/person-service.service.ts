import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personneDetailSubject = new Subject<Personne>();
  constructor() { }

  showPersonneDetails(personne: Personne) {
    this.personneDetailSubject.next(personne);
  }
}
