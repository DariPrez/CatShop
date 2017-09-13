import { Component, OnInit, Output } from '@angular/core';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { Item } from '../../item-list/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input   myCart: Cart;
@Output total: EventEmitter<number> = new EventEmitter<number>();
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.myCart = this.cartService.myCart;
    this.total.emit(this.totalItems());
  }

  public totalItems() {
    return this.cartService.getItemLength();
  }

  public totalPayByItem(a: number, b: number) {
    return this.cartService.totalPayByItem(a, b);
  }

  public remove(item: Item) {
        this.cartService.removeItem(item);
    }
}
