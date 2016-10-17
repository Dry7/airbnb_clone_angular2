import { Injectable } from '@angular/core';
import { LocalStorage } from 'angular2-localstorage/WebStorage';

@Injectable()
export class WishListService {

  @LocalStorage() private ads: number[] = [];

  constructor() { }

  public add(id: number) {
    this.ads.push(id);
  }

  public toggle(id: number) {
    if (this.is(id)) {
      this.remove(id);
    } else {
      this.add(id);
    }
  }

  public is(id: number) {
    return this.ads.indexOf(id) > -1;
  }

  public remove(id: number) {
    if (this.is(id)) {
      this.ads = this.ads.filter(el => el != id);
    }
  }
}
