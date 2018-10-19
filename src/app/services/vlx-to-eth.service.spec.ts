import { TestBed, inject } from '@angular/core/testing';

import { VlxToEthService } from './vlx-to-eth.service';

describe('VlxToEthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VlxToEthService]
    });
  });

  it('should be created', inject([VlxToEthService], (service: VlxToEthService) => {
    expect(service).toBeTruthy();
  }));
});
