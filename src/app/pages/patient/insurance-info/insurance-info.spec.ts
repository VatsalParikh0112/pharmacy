import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceInfo } from './insurance-info';

describe('InsuranceInfo', () => {
  let component: InsuranceInfo;
  let fixture: ComponentFixture<InsuranceInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
