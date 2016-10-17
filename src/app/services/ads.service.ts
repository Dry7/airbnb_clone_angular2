import {Injectable, Inject} from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {IAdSearch} from "../interfaces/iad-search";

@Injectable()
export class AdsService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * Search
   *
   * @returns {Observable<R>}
   */
  public search() : Observable<IAdSearch> {
    return this.http.get(this.api + 'ads/search').map(response => response.json());
  }

}
