import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class MapService {

  private api: string = environment.api;

  constructor(private http: Http) { }

  /**
   * Get getting started
   *
   * @returns {Observable<R>}
   */
  public places(query: string) : Observable<any> {
    return this.http.get(this.api + 'map/places?query=' + query).map(response => response.json());
  }
}
