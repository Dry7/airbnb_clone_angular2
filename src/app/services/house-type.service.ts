import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IHouseType} from "../interfaces/ihouse-type";

@Injectable()
export class HouseTypeService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * All house types
   *
   * @returns {Observable<IHouseType[]>}
   */
  public all() : Observable<IHouseType[]> {
    return this.http.get(this.api + 'ads/house_types').map(response => response.json());
  }

  /**
   * Details house type
   *
   * @returns {Observable<IHouseType>}
   */
  public details(id: number) : Observable<IHouseType> {
    return this.all().map(items => { console.log(items.filter(item => item.id == id)[0]); return items.filter(item => item.id == id)[0]});
  }
}
