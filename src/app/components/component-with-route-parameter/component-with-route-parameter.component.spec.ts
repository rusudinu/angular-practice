import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithRouteParameterComponent } from './component-with-route-parameter.component';

describe('ComponentWithRouteParameterComponent', () => {
  let component: ComponentWithRouteParameterComponent;
  let fixture: ComponentFixture<ComponentWithRouteParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentWithRouteParameterComponent]
    });
    fixture = TestBed.createComponent(ComponentWithRouteParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
