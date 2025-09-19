import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInquiries } from './general-inquiries';

describe('GeneralInquiries', () => {
  let component: GeneralInquiries;
  let fixture: ComponentFixture<GeneralInquiries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralInquiries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInquiries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
