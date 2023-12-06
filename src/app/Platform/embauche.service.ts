import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personneEmbaucher !:Personne[]
  constructor(
  ) { 
    this.personneEmbaucher=[];
  }

  embaucher(personne:Personne):void{
    const index = this.personneEmbaucher.indexOf(personne);
    if(index<0){
    this.personneEmbaucher.push(personne);
    }else{
      alert("Le personne est deja embauche");
    } 
  }

  debaucher(personne:Personne):void {
    const index = this.personneEmbaucher.indexOf(personne);
    if(index>=0){
      this.personneEmbaucher.splice(index,1);
    }
  }

  getPersonneEmbaucher():Personne[]{
      return this.personneEmbaucher
  }


}
