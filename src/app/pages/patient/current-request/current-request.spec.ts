import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRequest } from './current-request';

describe('CurrentRequest', () => {
  let component: CurrentRequest;
  let fixture: ComponentFixture<CurrentRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
