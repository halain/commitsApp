import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(word: string): string {
    
    return word[0].toUpperCase() + word.slice(1);
  }

}
