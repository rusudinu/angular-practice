import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingDemoComponentComponent } from './propertybinding-demo-component.component';

describe('PropertybindingDemoComponentComponent', () => {
  let component: PropertybindingDemoComponentComponent;
  let fixture: ComponentFixture<PropertybindingDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertybindingDemoComponentComponent]
    });
    fixture = TestBed.createComponent(PropertybindingDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
