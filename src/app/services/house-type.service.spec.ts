/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HouseTypeService } from './house-type.service';

describe('Service: HouseType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseTypeService]
    });
  });

  it('should ...', inject([HouseTypeService], (service: HouseTypeService) => {
    expect(service).toBeTruthy();
  }));
});
