/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AwardsService } from './awards.service';

describe('Service: Awards', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwardsService]
    });
  });

  it('should ...', inject([AwardsService], (service: AwardsService) => {
    expect(service).toBeTruthy();
  }));
});
