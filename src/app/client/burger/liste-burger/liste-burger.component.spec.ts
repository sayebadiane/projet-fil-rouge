import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBurgerComponent } from './liste-burger.component';

describe('ListeBurgerComponent', () => {
  let component: ListeBurgerComponent;
  let fixture: ComponentFixture<ListeBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
