import { TestBed } from '@angular/core/testing';

import { MygoLoadingService } from './mygo-loading.service';

describe('MygoLoadingService', () => {
  let service: MygoLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygoLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
