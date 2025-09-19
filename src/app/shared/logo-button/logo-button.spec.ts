import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoButton } from './logo-button';

describe('LogoButton', () => {
  let component: LogoButton;
  let fixture: ComponentFixture<LogoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
