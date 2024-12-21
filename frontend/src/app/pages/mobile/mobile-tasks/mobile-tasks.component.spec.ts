import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTasksComponent } from './mobile-tasks.component';

describe('MobileTasksComponent', () => {
  let component: MobileTasksComponent;
  let fixture: ComponentFixture<MobileTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileTasksComponent]
    });
    fixture = TestBed.createComponent(MobileTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
