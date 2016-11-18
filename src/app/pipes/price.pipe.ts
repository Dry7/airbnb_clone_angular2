import { Pipe, PipeTransform } from '@angular/core';
import {IAd} from "../interfaces/iad";

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(ad: IAd, args?: any): any {
    return ad.price + '₽' + (args == 'withType' ? ' per night' : '');
  }

}
