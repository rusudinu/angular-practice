import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceForDataSharing } from '../../shared/service-for-data-sharing';

@Component({
  selector: 'app-second-dummy-component',
  templateUrl: './second-dummy-component.component.html',
  styleUrls: ['./second-dummy-component.component.css']
})
export class SecondDummyComponentComponent {
  nameListener$: Observable<string>;

  constructor(
    private readonly serviceForDataSharing: ServiceForDataSharing
  ) {
    this.nameListener$ = serviceForDataSharing.name$;
    this.serviceForDataSharing.name$.subscribe(name => {
      console.log(name);
    });
  }
}
