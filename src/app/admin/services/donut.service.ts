import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {find, flatMap, map, mapTo, Observable, of, reduce, tap} from "rxjs";

import {Donut} from "../models/donut.model";


@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private readonly httpClient: HttpClient) { }

  read(): Observable<Donut[]> {
    if (this.donuts.length) {
      return of(this.donuts);
    }
    return this.httpClient.get<Donut[]>(`/api/donuts`).pipe(
      tap(donuts => this.donuts = donuts)
    )
  }

  readOne(id: string): Observable<Donut> {
    return this.read().pipe(
      map((donuts: Donut[]) => donuts.find(donut => donut.id === id) || {name: '', price: 0, icon: '', description: ''}),
    )
  }

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
