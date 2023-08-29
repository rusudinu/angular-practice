import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-environment-demo-component',
  templateUrl: './environment-demo-component.component.html',
  styleUrls: ['./environment-demo-component.component.css']
})
export class EnvironmentDemoComponentComponent {
  currentEnvironmentPublicName = environment.currentEnvironmentPublicName;
  // title2 = environment.extra;
}
