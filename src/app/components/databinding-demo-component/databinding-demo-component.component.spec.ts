import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingDemoComponentComponent } from './databinding-demo-component.component';

describe('DatabindingDemoComponentComponent', () => {
  let component: DatabindingDemoComponentComponent;
  let fixture: ComponentFixture<DatabindingDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingDemoComponentComponent]
    });
    fixture = TestBed.createComponent(DatabindingDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
