import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CartAction } from './models';
import { FRUITS } from './constants';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  @Output()
  OnItemSelection = new Subject<CartAction>();

  fruits = FRUITS;

  inc(i: number) {
    const action: CartAction = {
      item: this.fruits[i],
      quantity: 1,
    };
    console.info('INC: ', this.fruits[i]);
    this.OnItemSelection.next(action);
  }

  dec(i: number) {
    const action: CartAction = {
      item: this.fruits[i],
      quantity: -1,
    };
    console.info('DEC: ', this.fruits[i]);
    this.OnItemSelection.next(action);
  }
}
