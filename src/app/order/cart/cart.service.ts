import { Item } from '../../item-list/item.model';
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
    myCart: Cart;

    constructor() {
        this.myCart = new Cart();
        this.myCart.items = new Array<Item>(); }

    getItemList() {
        return this.myCart;
        }

    getItemLength() {
        return this.myCart.items.length;
    }
    addeItem(item: Item) {
        this.myCart.items.push(item);
    }

    removeItem(item: Item) {
        const ar = this.myCart.items.indexOf(item);
        this.myCart.items.splice(ar);
    }

    // hacer el metodo de total en euros
}
