import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoissonMenuComponent } from './detail-boisson-menu.component';

describe('DetailBoissonMenuComponent', () => {
  let component: DetailBoissonMenuComponent;
  let fixture: ComponentFixture<DetailBoissonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBoissonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoissonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
