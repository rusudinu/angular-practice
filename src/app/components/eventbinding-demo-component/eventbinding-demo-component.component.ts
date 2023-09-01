import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding-demo-component',
  templateUrl: './eventbinding-demo-component.component.html',
  styleUrls: ['./eventbinding-demo-component.component.css']
})
export class EventbindingDemoComponentComponent {
  handleClick() {
    console.log('Button clicked');
  }

  handleClickWithEvent(event: MouseEvent) {
    console.log('Button clicked', event);
  }
}
