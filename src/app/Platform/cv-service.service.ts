import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes !: Personne[]
  constructor(
  ) { 
    this.personnes = [
      new Personne(1,'Foulen','Ben Falten',23,2222222,'Student','rotating_card_profile2.png'),
      new Personne(2,'Tounsi','Tounsi',22,1111111,'Student','rotating_card_profile3.png'),
      new Personne(3,'Test','Tp',30,450124,'Student',''),
    ]
  }

  getPersonne(): Personne[]{
    
    return this.personnes
  }

  getPersonneById(id: number): Personne {
    const personne = this.personnes.find(personne =>{
        return personne.id == id
      })
    if(personne === undefined){
      throw new Error(`Personne with id ${id} not found.`);
    }
    return personne
  }

  deletePersonne(personne:Personne):void{
    const index = this.personnes.indexOf(personne);
    if(index>=0){
    this.personnes.splice(index,1);
    }
  }
}
