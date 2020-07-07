import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraph'
})
export class ParaphPipe implements PipeTransform {

  transform(name: string, patronymic: string): string {
    
    let paraph1: string[] = name.split(''); 
    let paraph2: string[] = patronymic.split(''); 
    return paraph1[0] + '. ' + paraph2[0] + '.' 
    
  }

}
