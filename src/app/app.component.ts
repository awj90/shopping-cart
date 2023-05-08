import { Component } from '@angular/core';
import { CartAction, CartItem } from './components/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cart: CartItem[] = [];

  process(action: CartAction) {
    let i = this.cart.find((cartItem) => cartItem.item == action.item);
    // Incr
    if (action.quantity > 0) {
      // .find returns undefined if no matches are found
      if (i != undefined) {
        i.quantity += action.quantity;
        console.info('cart: ', this.cart);
        return;
      } else {
        let newItem: CartItem = {
          item: action.item,
          quantity: action.quantity,
        };
        this.cart.push(newItem);
      }
    }
    if (action.quantity < 0) {
      // Decr
      if (i != undefined) {
        if (i.quantity >= 1) {
          i.quantity += action.quantity;
          this.cart = this.cart.filter((cartItem) => cartItem.quantity > 0);
          console.info('cart: ', this.cart);
          return;
        }
      }
    }
    console.info('cart: ', this.cart);
  }
}
