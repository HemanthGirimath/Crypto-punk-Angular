import { TestBed } from '@angular/core/testing';

import { MoralisServicesService } from './moralis-services.service';

describe('MoralisServicesService', () => {
  let service: MoralisServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoralisServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
