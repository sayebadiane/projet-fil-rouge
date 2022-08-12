import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierBurgerComponent } from './panier-burger.component';

describe('PanierBurgerComponent', () => {
  let component: PanierBurgerComponent;
  let fixture: ComponentFixture<PanierBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
