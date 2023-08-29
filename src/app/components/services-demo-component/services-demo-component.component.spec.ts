import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDemoComponentComponent } from './services-demo-component.component';

describe('ServicesDemoComponentComponent', () => {
  let component: ServicesDemoComponentComponent;
  let fixture: ComponentFixture<ServicesDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesDemoComponentComponent]
    });
    fixture = TestBed.createComponent(ServicesDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
