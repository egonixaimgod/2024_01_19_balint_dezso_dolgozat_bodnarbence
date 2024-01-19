import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsekComponent } from './macsek.component';

describe('MacsekComponent', () => {
  let component: MacsekComponent;
  let fixture: ComponentFixture<MacsekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacsekComponent]
    });
    fixture = TestBed.createComponent(MacsekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
