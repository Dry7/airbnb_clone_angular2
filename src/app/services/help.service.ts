import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {IHelpCategory} from "../interfaces/ihelp-category";
import {IHelpArticle} from "../interfaces/ihelp-article";
import {IHelpTopic} from "../interfaces/ihelp-topic";

@Injectable()
export class HelpService {

  private api: string = 'http://airbnb/api/v1/';

  constructor(private http: Http) { }

  /**
   * Get categories
   *
   * @returns {Observable<R>}
   */
  public categories() : Observable<IHelpCategory> {
    return this.http.get(this.api + 'help/categories').map(response => response.json());
  }

  /**
   * Get suggested questions
   *
   * @returns {Observable<R>}
   */
  public suggested() : Observable<IHelpArticle> {
    return this.http.get(this.api + 'help/suggested').map(response => response.json());
  }

  /**
   * Get popular questions
   *
   * @returns {Observable<R>}
   */
  public popular() : Observable<IHelpArticle> {
    return this.http.get(this.api + 'help/popular').map(response => response.json());
  }

  /**
   * Get search
   *
   * @returns {Observable<R>}
   */
  public search(query: string) : Observable<IHelpArticle> {
    return this.http.get(this.api + 'help/search?query=' + query).map(response => response.json());
  }

  /**
   * Get details
   *
   * @returns {Observable<R>}
   */
  public details(id: number) : Observable<IHelpArticle> {
    return this.http.get(this.api + 'help/' + id).map(response => response.json());
  }

  /**
   * Get topic
   *
   * @returns {Observable<R>}
   */
  public topic(id: number) : Observable<IHelpTopic> {
    return this.http.get(this.api + 'help/topic/' + id).map(response => response.json());
  }
}
