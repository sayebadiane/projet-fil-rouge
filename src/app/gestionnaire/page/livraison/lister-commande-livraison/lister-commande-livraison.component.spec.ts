import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCommandeLivraisonComponent } from './lister-commande-livraison.component';

describe('ListerCommandeLivraisonComponent', () => {
  let component: ListerCommandeLivraisonComponent;
  let fixture: ComponentFixture<ListerCommandeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCommandeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCommandeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
