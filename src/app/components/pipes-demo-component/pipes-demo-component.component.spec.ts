import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDemoComponentComponent } from './pipes-demo-component.component';

describe('PipesDemoComponentComponent', () => {
  let component: PipesDemoComponentComponent;
  let fixture: ComponentFixture<PipesDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesDemoComponentComponent]
    });
    fixture = TestBed.createComponent(PipesDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
