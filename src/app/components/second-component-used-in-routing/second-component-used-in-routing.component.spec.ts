import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentUsedInRoutingComponent } from './second-component-used-in-routing.component';

describe('SecondComponentUsedInRoutingComponent', () => {
  let component: SecondComponentUsedInRoutingComponent;
  let fixture: ComponentFixture<SecondComponentUsedInRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondComponentUsedInRoutingComponent]
    });
    fixture = TestBed.createComponent(SecondComponentUsedInRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
