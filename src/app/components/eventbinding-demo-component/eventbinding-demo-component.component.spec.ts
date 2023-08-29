import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingDemoComponentComponent } from './eventbinding-demo-component.component';

describe('EventbindingDemoComponentComponent', () => {
  let component: EventbindingDemoComponentComponent;
  let fixture: ComponentFixture<EventbindingDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventbindingDemoComponentComponent]
    });
    fixture = TestBed.createComponent(EventbindingDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
