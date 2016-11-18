import { Pipe, PipeTransform } from '@angular/core';
import {IAd} from "../interfaces/iad";

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(ad: IAd, nights?: number, discount?: number): any {
    return Math.ceil(ad.price*nights/100*discount);
  }

}
