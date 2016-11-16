import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largePhoto'
})
export class LargePhotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('x_medium', 'xx_large');
  }

}
