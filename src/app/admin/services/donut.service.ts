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

  create(payload: Donut): Observable<Donut> {
    return this.httpClient.post<Donut>(`api/donuts`, payload).pipe(
      tap((donut: Donut) => this.donuts = [...this.donuts, donut])
    );
  }

  update(payload: Donut): Observable<Donut> {
    return this.httpClient.put<Donut>(`api/donuts/${payload.id}`, payload).pipe(
      tap((updatedDonut: Donut) => {
        this.donuts = this.donuts.map(donut => donut.id === updatedDonut.id ? updatedDonut : donut);
      })
    );
  }

  delete(payload: Donut): Observable<Donut> {
    return this.httpClient.delete<Donut>(`api/donuts/${payload.id}`).pipe(
      tap(() => {
        this.donuts = this.donuts.filter(donut => donut.id !== payload.id);
      })
    )
  }
}
