import { TestBed } from '@angular/core/testing';

import { YgoprodeckService } from './ygoprodeck.service';

describe('YgoprodeckService', () => {
  let service: YgoprodeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YgoprodeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
