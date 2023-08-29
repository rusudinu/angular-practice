import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentDemoComponentComponent } from './environment-demo-component.component';

describe('EnvironmentDemoComponentComponent', () => {
  let component: EnvironmentDemoComponentComponent;
  let fixture: ComponentFixture<EnvironmentDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentDemoComponentComponent]
    });
    fixture = TestBed.createComponent(EnvironmentDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
