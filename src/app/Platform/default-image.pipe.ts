import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    const defaultImg = "default.png";
    if(!value){
      return defaultImg
    }
    return value
  }
}
