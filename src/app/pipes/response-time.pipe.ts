import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responseTime'
})
export class ResponseTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'within_an_hour':  return 'within an hour';
      default: return '';
    }
  }

}
