import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent {

  @Input() personne!:Personne

  constructor(
    private embaucheService: EmbaucheService,
    private route: Router
  ){}

  Embaucher(){
    return this.embaucheService.embaucher(this.personne);
  }

  plusInfo(){
    const link = ['cv',this.personne.id];
    this.route.navigate(link);
  }
}
