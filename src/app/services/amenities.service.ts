import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IAmenity} from "../interfaces/iamenity";

@Injectable()
export class AmenitiesService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * All amenities
   *
   * @returns {Observable<IAmenity[]>}
   */
  public all() : Observable<IAmenity[]> {
    return this.http.get(this.api + 'ads/amenities').map(response => response.json());
  }

  /**
   * Amenities for search
   *
   * @returns {Observable<IAmenity[]>}
   */
  public filter() : Observable<IAmenity[]> {
    return this.all().map(items => items.filter(item => item.filter == true));
  }
}
