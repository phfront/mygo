import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchMoveComponent } from './card-search-move.component';

describe('CardSearchMoveComponent', () => {
  let component: CardSearchMoveComponent;
  let fixture: ComponentFixture<CardSearchMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSearchMoveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
