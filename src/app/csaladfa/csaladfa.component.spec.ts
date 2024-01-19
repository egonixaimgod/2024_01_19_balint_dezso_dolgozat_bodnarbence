import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaladfaComponent } from './csaladfa.component';

describe('CsaladfaComponent', () => {
  let component: CsaladfaComponent;
  let fixture: ComponentFixture<CsaladfaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsaladfaComponent]
    });
    fixture = TestBed.createComponent(CsaladfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
