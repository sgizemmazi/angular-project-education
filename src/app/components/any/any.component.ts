import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.css']
})
export class AnyComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart() {
    const newItem: CartItem = { id: 1, name: 'ÜRÜN', quantity: 1 };
    this.cartService.addItem(newItem);
  }

}
