import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    switch (value) {
      case 1:
        return '2D - DUB';
      case 2:
        return '2D - LEG';
      case 3:
        return '3D - DUB';
      case 4:
        return '3D - LEG';
      default:
        return  'Indisponível';
    }
  }

}
