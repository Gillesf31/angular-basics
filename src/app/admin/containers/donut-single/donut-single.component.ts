import { Component, OnInit } from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)">
      ></app-donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private readonly donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.readOne('rURv7VX').subscribe((donut: any) => {
      this.donut = donut
    });
  }

  onCreate(donut: Donut): void {
    this.donutService.create(donut).subscribe();
  }

  onUpdate(donut: Donut): void {
    this.donutService.update(donut).subscribe();
  }

  onDelete(donut: Donut): void {
    this.donutService.delete(donut).subscribe();
  }
}
