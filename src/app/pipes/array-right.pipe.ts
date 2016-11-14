import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayRight'
})
export class ArrayRightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((item, index) => index%2==1);
  }

}
