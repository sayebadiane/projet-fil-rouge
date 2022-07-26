import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCadrdeComponent } from './liste-cadrde.component';

describe('ListeCadrdeComponent', () => {
  let component: ListeCadrdeComponent;
  let fixture: ComponentFixture<ListeCadrdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCadrdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCadrdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
