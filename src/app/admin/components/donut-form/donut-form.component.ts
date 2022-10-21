import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" ngModel>
      </label>
      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" ngModel>
      </label>
      <!-- Debug purpose -->
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
  ]
})
export class DonutFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}