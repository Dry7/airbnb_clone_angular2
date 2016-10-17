/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WishListService } from './wish-list.service';

describe('Service: WishList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishListService]
    });
  });

  it('should ...', inject([WishListService], (service: WishListService) => {
    expect(service).toBeTruthy();
  }));
});
