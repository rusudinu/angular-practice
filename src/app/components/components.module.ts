import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from '../shared/capitalize-pipe';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { EnvironmentDemoComponentComponent } from './environment-demo-component/environment-demo-component.component';
import { DatabindingDemoComponentComponent } from './databinding-demo-component/databinding-demo-component.component';
import { PropertybindingDemoComponentComponent } from './propertybinding-demo-component/propertybinding-demo-component.component';
import { EventbindingDemoComponentComponent } from './eventbinding-demo-component/eventbinding-demo-component.component';
import { TwowaybindingDemoComponentComponent } from './twowaybinding-demo-component/twowaybinding-demo-component.component';
import { DirectivesDemoComponentComponent } from './directives-demo-component/directives-demo-component.component';
import { ServicesDemoComponentComponent } from './services-demo-component/services-demo-component.component';
import { PipesDemoComponentComponent } from './pipes-demo-component/pipes-demo-component.component';
import { FirstDummyComponentComponent } from './first-dummy-component/first-dummy-component.component';
import { SecondDummyComponentComponent } from './second-dummy-component/second-dummy-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { FormsDemoComponentComponent } from './forms-demo-component/forms-demo-component.component';
import { FirstComponentUsedInRoutingComponent } from './first-component-used-in-routing/first-component-used-in-routing.component';
import { SecondComponentUsedInRoutingComponent } from './second-component-used-in-routing/second-component-used-in-routing.component';
import { ComponentWithRouteParameterComponent } from './component-with-route-parameter/component-with-route-parameter.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';


@NgModule({
  declarations: [
    DemoComponentComponent,
    EnvironmentDemoComponentComponent,
    DatabindingDemoComponentComponent,
    PropertybindingDemoComponentComponent,
    EventbindingDemoComponentComponent,
    TwowaybindingDemoComponentComponent,
    DirectivesDemoComponentComponent,
    ServicesDemoComponentComponent,
    PipesDemoComponentComponent,
    FirstDummyComponentComponent,
    SecondDummyComponentComponent,
    UsersComponentComponent,
    FormsDemoComponentComponent,
    FirstComponentUsedInRoutingComponent,
    SecondComponentUsedInRoutingComponent,
    ComponentWithRouteParameterComponent,
    SignalsDemoComponent
  ],
  exports: [
    DemoComponentComponent,
    EnvironmentDemoComponentComponent,
    DatabindingDemoComponentComponent,
    EventbindingDemoComponentComponent,
    PropertybindingDemoComponentComponent,
    TwowaybindingDemoComponentComponent,
    DirectivesDemoComponentComponent,
    FirstDummyComponentComponent,
    SecondDummyComponentComponent,
    UsersComponentComponent,
    PipesDemoComponentComponent,
    FormsDemoComponentComponent,
    SignalsDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CapitalizePipe,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {
}
