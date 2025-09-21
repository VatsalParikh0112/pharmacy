import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateButton } from './navigate-button';

describe('NavigateButton', () => {
  let component: NavigateButton;
  let fixture: ComponentFixture<NavigateButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
