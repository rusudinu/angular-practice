import { Component } from '@angular/core';
import { ServiceForDataSharing } from '../../shared/service-for-data-sharing';

@Component({
  selector: 'app-first-dummy-component',
  templateUrl: './first-dummy-component.component.html',
  styleUrls: ['./first-dummy-component.component.css']
})
export class FirstDummyComponentComponent {
  constructor(
    private readonly serviceForDataSharing: ServiceForDataSharing
  ) {
  }

  name: string = '';

  setName() {
    this.serviceForDataSharing.setName(this.name);
  }
}
