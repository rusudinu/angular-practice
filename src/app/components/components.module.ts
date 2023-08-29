import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { EnvironmentDemoComponentComponent } from './environment-demo-component/environment-demo-component.component';


@NgModule({
  declarations: [
    DemoComponentComponent,
    EnvironmentDemoComponentComponent
  ],
  exports: [
    DemoComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
