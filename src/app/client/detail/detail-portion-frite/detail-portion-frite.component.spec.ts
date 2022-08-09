import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPortionFriteComponent } from './detail-portion-frite.component';

describe('DetailPortionFriteComponent', () => {
  let component: DetailPortionFriteComponent;
  let fixture: ComponentFixture<DetailPortionFriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPortionFriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPortionFriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
