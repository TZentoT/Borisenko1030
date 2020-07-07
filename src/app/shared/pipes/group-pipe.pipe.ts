import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupPipe'
})
export class GroupPipePipe implements PipeTransform {

  transform(groupNum: number): string {

    switch (groupNum) {
      case 0:
        return 'САПР';
      case 1: 
        return 'Веб-Дизайн';
      case 2:
        return 'Информационные технологии';
      case 3:
        return 'Дизайн';
      case 4: 
        return 'Журналистика'
    }

  }

}
