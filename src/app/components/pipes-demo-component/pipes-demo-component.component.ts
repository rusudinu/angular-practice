import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-pipes-demo-component',
  templateUrl: './pipes-demo-component.component.html',
  styleUrls: ['./pipes-demo-component.component.css']
})
export class PipesDemoComponentComponent {
  today = new Date();
  title$ = of('Home');
}
