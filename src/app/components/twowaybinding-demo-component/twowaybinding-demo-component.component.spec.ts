import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingDemoComponentComponent } from './twowaybinding-demo-component.component';

describe('TwowaybindingDemoComponentComponent', () => {
  let component: TwowaybindingDemoComponentComponent;
  let fixture: ComponentFixture<TwowaybindingDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowaybindingDemoComponentComponent]
    });
    fixture = TestBed.createComponent(TwowaybindingDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
