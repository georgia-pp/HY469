import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWidgetComponent } from './music-widget.component';

describe('MusicWidgetComponent', () => {
  let component: MusicWidgetComponent;
  let fixture: ComponentFixture<MusicWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicWidgetComponent]
    });
    fixture = TestBed.createComponent(MusicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
