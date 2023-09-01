import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding-demo-component',
  templateUrl: './propertybinding-demo-component.component.html',
  styleUrls: ['./propertybinding-demo-component.component.css']
})
export class PropertybindingDemoComponentComponent {
  propertyBoundImageUrl = 'https://picsum.photos/200/300';
}
