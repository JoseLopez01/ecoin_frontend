/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RewardService } from './reward.service';

describe('Service: Reward', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RewardService]
    });
  });

  it('should ...', inject([RewardService], (service: RewardService) => {
    expect(service).toBeTruthy();
  }));
});
