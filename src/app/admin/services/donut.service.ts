import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  donuts: Donut[] = [
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

  constructor() { }
}
