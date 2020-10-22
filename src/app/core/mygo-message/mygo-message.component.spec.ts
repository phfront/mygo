import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygoMessageComponent } from './mygo-message.component';

describe('MygoMessageComponent', () => {
  let component: MygoMessageComponent;
  let fixture: ComponentFixture<MygoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygoMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
