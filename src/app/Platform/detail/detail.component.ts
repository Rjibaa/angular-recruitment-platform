import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  personne!: Personne

  constructor(
    private cvService: CvService,
    private activatedRoute : ActivatedRoute,
    private route: Router,
    private toast: ToastrService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params)
        this.personne = this.cvService.getPersonneById(params['id']);
        console.log(this.personne)
      }
    )
  }
  
  supprimer(personne: Personne){
    this.cvService.deletePersonne(personne);
    const link=['cv'];
    this.route.navigate(link);
    this.toast.show("Person deleted successfully");
  }
}
