import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWidgetComponent } from './notification-widget.component';

describe('NotificationWidgetComponent', () => {
  let component: NotificationWidgetComponent;
  let fixture: ComponentFixture<NotificationWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationWidgetComponent]
    });
    fixture = TestBed.createComponent(NotificationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
