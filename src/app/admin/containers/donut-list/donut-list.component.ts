import { Component, OnInit } from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div class="donut-list-action">
        <a routerLink="new" class="btn btn--green">
          New Donut
          <img src="/assets/img/icon/plus.svg" />
        </a>
      </div>
      <ng-container *ngIf="donuts?.length; else noDonuts">
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
    `.donut-list {
      &-action {
        margin-bottom: 10px;
      }
    }`
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private readonly donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.read().subscribe(donuts => this.donuts = donuts);
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }

}
