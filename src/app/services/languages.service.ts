import {Injectable, Inject} from '@angular/core';
import {ILanguage} from "../interfaces/ilanguage";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class LanguagesService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * All amenities
   *
   * @returns {Observable<ILanguage[]>}
   */
  public all() : Observable<ILanguage[]> {
    return this.http.get(this.api + 'languages').map(response => response.json());
  }
}
