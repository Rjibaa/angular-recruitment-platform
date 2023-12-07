import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { PersonneService } from '../person-service.service';

@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe],
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css'
})
export class ItemCvComponent implements OnInit {
  
  @Input() personne!:Personne ;

  constructor(
    private personService: PersonneService
  ){}

  ngOnInit(): void {
  }

  selectPersonne(){
    this.personService.showPersonneDetails(this.personne)
  }

}