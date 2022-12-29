import { Component, OnInit } from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
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
