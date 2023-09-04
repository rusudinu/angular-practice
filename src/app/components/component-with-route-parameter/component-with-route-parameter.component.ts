import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-with-route-parameter',
  templateUrl: './component-with-route-parameter.component.html',
  styleUrls: ['./component-with-route-parameter.component.css']
})
export class ComponentWithRouteParameterComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
