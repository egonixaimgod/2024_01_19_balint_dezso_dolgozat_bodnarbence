import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaladfapostComponent } from './csaladfapost.component';

describe('CsaladfapostComponent', () => {
  let component: CsaladfapostComponent;
  let fixture: ComponentFixture<CsaladfapostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsaladfapostComponent]
    });
    fixture = TestBed.createComponent(CsaladfapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
