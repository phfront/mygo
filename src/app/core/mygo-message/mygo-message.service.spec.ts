import { TestBed } from '@angular/core/testing';

import { MygoMessageService } from './mygo-message.service';

describe('MygoMessageService', () => {
  let service: MygoMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygoMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
