import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMenuBurgerComponent } from './detail-menu-burger.component';

describe('DetailMenuBurgerComponent', () => {
  let component: DetailMenuBurgerComponent;
  let fixture: ComponentFixture<DetailMenuBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMenuBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMenuBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
