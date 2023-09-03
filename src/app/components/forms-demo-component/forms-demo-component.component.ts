import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-demo-component',
  templateUrl: './forms-demo-component.component.html',
  styleUrls: ['./forms-demo-component.component.css']
})
export class FormsDemoComponentComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
