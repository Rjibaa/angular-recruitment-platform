import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {
  monObservable !: Observable<string>;
  currentimage !: string;
  images = [
    "default.png",
    "rotating_card_profile2.png",
    "rotating_card_thumb.png",
    "rotating_card_profile3.png"
  ]
  constructor(){}

  ngOnInit(): void {
    this.monObservable = new Observable(
      (observer)=> {
        let i = 0;
        setInterval(
          () => {
            observer.next(this.images[i]);
            if(i === this.images.length - 1){
              i = 0; 
            }else{
              i++;
            }
          },
          2000 )
      }
    );

  }

}
