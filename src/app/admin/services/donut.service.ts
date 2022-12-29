import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private readonly httpClient: HttpClient) { }

  read(): Observable<Donut[]> {
    return this.httpClient.get<Donut[]>(`/api/donuts`)
    // return this.donuts;
  }

  /*
  readOne(id: string): Donut {
    return this.donuts.find(donut => donut.id === id) || {name: '', price: 0, icon: '', description: ''};
  }
  */

  create(payload: Donut): void {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut): void {
    this.donuts = this.donuts.map(donut => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    })
  }

  delete(payload: Donut): void {
    this.donuts = this.donuts.filter(donut => donut.id !== payload.id);
  }
}
