import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor() { }

  read(): Donut[] {
    return this.donuts;
  }

  readOne(id: string): Donut {
    return this.donuts.find(donut => donut.id === id) || {name: '', price: 0, icon: '', description: ''};
  }

  create(payload: Donut): void {
    this.donuts = [...this.donuts, payload];
    console.warn('this.donuts', this.donuts);
  }

  update(payload: Donut): void {
    this.donuts = this.donuts.map(donut => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    })
    console.warn('this.donuts', this.donuts);
  }

  delete(payload: Donut): void {
    this.donuts = this.donuts.filter(donut => donut.id !== payload.id);
    console.warn('this.donuts', this.donuts);
  }
}
