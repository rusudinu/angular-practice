import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemoComponentComponent } from './forms-demo-component.component';

describe('FormsDemoComponentComponent', () => {
  let component: FormsDemoComponentComponent;
  let fixture: ComponentFixture<FormsDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsDemoComponentComponent]
    });
    fixture = TestBed.createComponent(FormsDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
