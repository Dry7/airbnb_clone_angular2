import {Pipe, PipeTransform, Inject} from '@angular/core';
import {HouseTypeService} from "../services/house-type.service";

@Pipe({
  name: 'houseType',
  pure: false
})
export class HouseTypePipe implements PipeTransform {

  private name : string = null;
  private i : number = 0;

  constructor(@Inject(HouseTypeService) private HouseTypeService) {}

  transform(value: any, args?: any): any {
    if (this.i == 0) {
      this.HouseTypeService.details(+value).subscribe(item => this.name = item.name, error => { this.i = 0; });
    } else {
      return this.name;
    }
    this.i++;
  }
}
