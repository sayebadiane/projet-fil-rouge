import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagebogyComponent } from './imagebogy.component';

describe('ImagebogyComponent', () => {
  let component: ImagebogyComponent;
  let fixture: ComponentFixture<ImagebogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagebogyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagebogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
