import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem{
  id: number;
  name: string;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() { }

  
  addItem(item: CartItem): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex > -1) {
      currentCart[itemIndex].quantity += item.quantity;
    } else {
      currentCart.push(item);
    }

    this.cartSubject.next(currentCart);
  }

  removeItem(itemId: number): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.findIndex(cartItem => cartItem.id === itemId);

    if (itemIndex > -1) {
      if (currentCart[itemIndex].quantity > 1) {
        currentCart[itemIndex].quantity -= 1;
      } else {
        currentCart.splice(itemIndex, 1);
      }
      this.cartSubject.next(currentCart);
    }
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }
}
