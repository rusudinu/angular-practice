import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDemoComponentComponent } from './directives-demo-component.component';

describe('DirectivesDemoComponentComponent', () => {
  let component: DirectivesDemoComponentComponent;
  let fixture: ComponentFixture<DirectivesDemoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesDemoComponentComponent]
    });
    fixture = TestBed.createComponent(DirectivesDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
