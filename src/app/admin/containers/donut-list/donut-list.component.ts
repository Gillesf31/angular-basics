import { Component, OnInit } from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else noDonuts">
        <app-donut-card 
          *ngFor="let donut of donuts; trackBy: trackById" 
          [donut]="donut">
        </app-donut-card>
      </ng-container>

      <ng-template #noDonuts>
        <p>No donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() { }

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: 'new',
        description: 'For  the pure chocoholic.',
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'limited',
        description: 'Sticky perfection.',
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.',
      },
      {
        id: 'ei9al3',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.',
      },
      {
        id: 'd9pzU3',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 149,
        description: 'Delicious lucious lemon.',
      }
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }

}
