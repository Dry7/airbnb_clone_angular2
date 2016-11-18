import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLeft'
})
export class ArrayLeftPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((item, index) => index%2==0);
  }

}
