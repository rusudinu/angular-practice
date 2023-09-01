import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDummyComponentComponent } from './second-dummy-component.component';

describe('SecondDummyComponentComponent', () => {
  let component: SecondDummyComponentComponent;
  let fixture: ComponentFixture<SecondDummyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondDummyComponentComponent]
    });
    fixture = TestBed.createComponent(SecondDummyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
