import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentWithRouteParameterComponent } from './components/component-with-route-parameter/component-with-route-parameter.component';
import { FirstComponentUsedInRoutingComponent } from './components/first-component-used-in-routing/first-component-used-in-routing.component';
import { SecondComponentUsedInRoutingComponent } from './components/second-component-used-in-routing/second-component-used-in-routing.component';

const routes: Routes = [
  {
    path: 'first-route',
    component: FirstComponentUsedInRoutingComponent,
  },
  {
    path: 'second-route',
    component: SecondComponentUsedInRoutingComponent,
  },
  {
    path: 'route-param/:id', component: ComponentWithRouteParameterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
