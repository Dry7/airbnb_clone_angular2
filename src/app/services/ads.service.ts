import {Injectable, Inject} from '@angular/core';
import {environment} from "../../environments/environment";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {IAdSearch} from "../interfaces/iad-search";
import {StringHelper} from "../helpers/string.helper";

@Injectable()
export class AdsService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * Search
   *
   * @returns {Observable<R>}
   */
  public search(page: number, active: any) : Observable<IAdSearch> {
    console.log(this.api + 'ads/search' + StringHelper.http_build_query(active));
    return this.http.get(this.api + 'ads/search').map(response => response.json());
  }

}
