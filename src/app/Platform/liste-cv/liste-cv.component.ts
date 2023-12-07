import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { Personne } from '../../Model/Personne';
import { PersonneService } from '../person-service.service';

@Component({
  selector: 'app-liste-cv',
  standalone: true,
  imports: [CommonModule,ItemCvComponent],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent implements OnInit {
  
  @Input() personnes!:Personne[]
  
  constructor(
  ){}

  ngOnInit(): void {
  }

}