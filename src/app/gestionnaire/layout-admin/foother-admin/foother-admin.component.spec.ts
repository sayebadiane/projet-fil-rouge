import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootherAdminComponent } from './foother-admin.component';

describe('FootherAdminComponent', () => {
  let component: FootherAdminComponent;
  let fixture: ComponentFixture<FootherAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootherAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
