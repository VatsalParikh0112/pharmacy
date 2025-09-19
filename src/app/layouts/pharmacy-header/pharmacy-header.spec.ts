import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHeader } from './pharmacy-header';

describe('PharmacyHeader', () => {
  let component: PharmacyHeader;
  let fixture: ComponentFixture<PharmacyHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
