import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() ordering!: boolean;
  @Output() updateOrdering = new EventEmitter<boolean>();

  placeOrder() {
    this.cart.placeOrder();
    this.updateOrdering.emit(false);
  }

  get diagnostic() { return JSON.stringify(this.ordering); }

  constructor(public cart: CartService) {}

  ngOnInit(): void {
  }

}
