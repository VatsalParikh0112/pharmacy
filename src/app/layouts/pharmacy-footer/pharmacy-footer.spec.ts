import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyFooter } from './pharmacy-footer';

describe('PharmacyFooter', () => {
  let component: PharmacyFooter;
  let fixture: ComponentFixture<PharmacyFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
