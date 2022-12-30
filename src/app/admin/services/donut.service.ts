import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {catchError, map, Observable, of, retry, retryWhen, tap, throwError} from "rxjs";

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
      tap(donuts => this.donuts = donuts),
      retry({delay: 5000, count: 3}),
      catchError(this.handleError)
    )
  }

  readOne(id: string): Observable<Donut> {
    return this.read().pipe(
      map((donuts: Donut[]) => donuts.find(donut => donut.id === id) || {name: '', price: 0, icon: '', description: ''}),
    )
  }

  create(payload: Donut): Observable<Donut> {
    return this.httpClient.post<Donut>(`api/donuts`, payload).pipe(
      tap((donut: Donut) => this.donuts = [...this.donuts, donut]),
      catchError(this.handleError)
    );
  }

  update(payload: Donut): Observable<Donut> {
    return this.httpClient.put<Donut>(`api/donuts/${payload.id}`, payload).pipe(
      tap((updatedDonut: Donut) => {
        this.donuts = this.donuts.map(donut => donut.id === updatedDonut.id ? updatedDonut : donut);
      }),
      catchError(this.handleError)
    );
  }

  delete(payload: Donut): Observable<Donut> {
    return this.httpClient.delete<Donut>(`api/donuts/${payload.id}`).pipe(
      tap(() => {
        this.donuts = this.donuts.filter(donut => donut.id !== payload.id);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // client-side
      console.warn('Client ', err.message);
    } else {
      // server-side
      console.warn('Server ', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
