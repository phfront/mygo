import { TestBed } from '@angular/core/testing';

import { MygoService } from './mygo.service';

describe('MygoService', () => {
  let service: MygoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
