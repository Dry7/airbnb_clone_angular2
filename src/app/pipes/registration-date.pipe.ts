import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationDate'
})
export class RegistrationDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    return (date.getMonth()+1) + '/' + date.getFullYear();
  }

}
