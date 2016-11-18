import {Injectable, Inject} from '@angular/core';
import {environment} from "../../environments/environment";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {IAdSearch} from "../interfaces/iad-search";
import {StringHelper} from "../helpers/string.helper";
import {IAd} from "../interfaces/iad";

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
    return this.http.get(this.api + 'ads/search?page=' + page + '&' + StringHelper.http_build_query(active)).map(response => response.json());
  }

  /**
   * Details
   *
   * @returns {Observable<R>}
   */
  public details(id: number) : Observable<IAd> {
    return this.http.get(this.api + 'ads/' + id).map(response => response.json());
  }
}
