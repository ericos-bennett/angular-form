import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Meal } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _cart = new BehaviorSubject<Meal[]>([]);

  readonly cart$ = this._cart.asObservable();

  private get cart(): Meal[] {
    return this._cart.getValue();
  }

  private set cart(val: Meal[]) {
    this._cart.next(val);
  }

  addMeal(meal: Meal) {
    this.cart = [
      ...this.cart,
      { ...meal, id: this.cart.length + 1 }
    ]
  }

  removeMeal(id: number) {
    this.cart = this.cart.filter(meal => meal.id !== id);
  }

  constructor() { }
}
