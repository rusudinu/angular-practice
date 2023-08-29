import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { EnvironmentDemoComponentComponent } from './environment-demo-component/environment-demo-component.component';
import { DatabindingDemoComponentComponent } from './databinding-demo-component/databinding-demo-component.component';
import { PropertyBindingComponentComponent } from './property-binding-component/property-binding-component.component';
import { PropertybindingDemoComponentComponent } from './propertybinding-demo-component/propertybinding-demo-component.component';
import { EventbindingDemoComponentComponent } from './eventbinding-demo-component/eventbinding-demo-component.component';
import { TwowaybindingDemoComponentComponent } from './twowaybinding-demo-component/twowaybinding-demo-component.component';
import { DirectivesDemoComponentComponent } from './directives-demo-component/directives-demo-component.component';
import { ServicesDemoComponentComponent } from './services-demo-component/services-demo-component.component';
import { PipesDemoComponentComponent } from './pipes-demo-component/pipes-demo-component.component';


@NgModule({
  declarations: [
    DemoComponentComponent,
    EnvironmentDemoComponentComponent,
    DatabindingDemoComponentComponent,
    PropertyBindingComponentComponent,
    PropertybindingDemoComponentComponent,
    EventbindingDemoComponentComponent,
    TwowaybindingDemoComponentComponent,
    DirectivesDemoComponentComponent,
    ServicesDemoComponentComponent,
    PipesDemoComponentComponent
  ],
  exports: [
    DemoComponentComponent,
    EnvironmentDemoComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
