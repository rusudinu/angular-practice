import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo-component',
  templateUrl: './directives-demo-component.component.html',
  styleUrls: ['./directives-demo-component.component.css']
})
export class DirectivesDemoComponentComponent {
  name: string = '';
  anotherName: string = '';
  namesList: string[] = [];

  addName() {
    this.namesList.push(this.anotherName);
    this.anotherName = '';
    console.log(this.namesList)
  }
}
