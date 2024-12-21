import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMessagesComponent } from './mobile-messages.component';

describe('MobileMessagesComponent', () => {
  let component: MobileMessagesComponent;
  let fixture: ComponentFixture<MobileMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMessagesComponent]
    });
    fixture = TestBed.createComponent(MobileMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
