import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygoInputComponent } from './mygo-input.component';

describe('MygoInputComponent', () => {
  let component: MygoInputComponent;
  let fixture: ComponentFixture<MygoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
