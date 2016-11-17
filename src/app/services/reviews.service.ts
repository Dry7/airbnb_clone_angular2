import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IReview} from "../interfaces/ireview";

@Injectable()
export class ReviewsService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  /**
   * Ad reviews
   *
   * @returns {Observable<IReview[]>}
   */
  public ad(id: number) : Observable<IReview[]> {
    return this.http.get(this.api + 'ads/' + id + '/reviews').map(response => response.json());
  }
}
