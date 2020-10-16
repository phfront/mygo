import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDeckComponent } from './active-deck.component';

describe('ActiveDeckComponent', () => {
  let component: ActiveDeckComponent;
  let fixture: ComponentFixture<ActiveDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
