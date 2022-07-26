import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoisonComponent } from './card-boison.component';

describe('CardBoisonComponent', () => {
  let component: CardBoisonComponent;
  let fixture: ComponentFixture<CardBoisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBoisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
