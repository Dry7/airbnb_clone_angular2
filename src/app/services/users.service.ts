import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {IUser} from "../interfaces/iuser";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

  private api: string = environment.api;

  constructor(@Inject(Http) private http) { }

  get REVIEWS_GUESTS() { return 'guests'; };
  get REVIEWS_HOSTS()  { return 'hosts'; };

  /**
   * Details
   *
   * @returns {Observable<IUser>}
   */
  public details(id: number) : Observable<IUser> {
    return this.http.get(this.api + 'users/' + id).map(response => response.json());
  }

  /**
   * Reviews
   *
   * @param id User id
   * @param section Section: guests|hosts
   *
   * @returns {Observable<IReview{}>}
   */
  public reviews(id: number, section: string) : Observable<IUser> {
    section = section == 'hosts' ? 'hosts' : 'guests';
    return this.http.get(this.api + 'users/' + id + '/reviews/' + section).map(response => response.json());
  }
}
