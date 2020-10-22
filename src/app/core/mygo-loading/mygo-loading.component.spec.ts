import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygoLoadingComponent } from './mygo-loading.component';

describe('MygoLoadingComponent', () => {
  let component: MygoLoadingComponent;
  let fixture: ComponentFixture<MygoLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygoLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
