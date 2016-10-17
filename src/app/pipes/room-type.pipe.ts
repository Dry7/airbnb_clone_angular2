import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomType'
})
export class RoomTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'entire_home':  return 'Entire home/apt';
      case 'private_room': return 'Private room';
      case 'shared_room':  return 'Shared room';
      default: return '';
    }
  }

}
