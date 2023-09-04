import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentUsedInRoutingComponent } from './first-component-used-in-routing.component';

describe('FirstComponentUsedInRoutingComponent', () => {
  let component: FirstComponentUsedInRoutingComponent;
  let fixture: ComponentFixture<FirstComponentUsedInRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponentUsedInRoutingComponent]
    });
    fixture = TestBed.createComponent(FirstComponentUsedInRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
