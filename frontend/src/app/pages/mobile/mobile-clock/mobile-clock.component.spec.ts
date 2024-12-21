import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClockComponent } from './mobile-clock.component';

describe('MobileClockComponent', () => {
  let component: MobileClockComponent;
  let fixture: ComponentFixture<MobileClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileClockComponent]
    });
    fixture = TestBed.createComponent(MobileClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
