import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomTypeClass'
})
export class RoomTypeClassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'entire_home':  return 'entire-place';
      case 'private_room': return 'private-room';
      case 'shared_room':  return 'shared-room';
      default: return '';
    }
  }

}
