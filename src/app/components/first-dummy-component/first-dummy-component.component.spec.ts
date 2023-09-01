import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDummyComponentComponent } from './first-dummy-component.component';

describe('FirstDummyComponentComponent', () => {
  let component: FirstDummyComponentComponent;
  let fixture: ComponentFixture<FirstDummyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstDummyComponentComponent]
    });
    fixture = TestBed.createComponent(FirstDummyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
