import { Pipe, PipeTransform } from '@angular/core';
import {StringHelper} from "../helpers/string.helper";

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return StringHelper.number_format(value) + '₽';
  }

}
