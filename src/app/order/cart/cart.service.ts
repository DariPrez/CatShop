import { Item } from '../../item-list/item.model';
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
    myCart: Cart;

    constructor() {
        this.myCart = new Cart();
        this.myCart.items = new Array<Item>();
    }

    getItemLength() {
        return this.myCart.items.length;
    }

    addItem(item: Item) {
        let a;
        for (const key of this.myCart.items) {
            if (key.id === item.id) {
                const d = item.quantity + key.quantity;
                item.quantity = d;
                a = key;
            }
        }
        if (a) {
            const ar = this.myCart.items.indexOf(a);
            this.myCart.items.splice(ar, 1, item);
        }else {
            this.myCart.items.push(item);
        }
    }

    removeItem(item: Item) {
        const ar = this.myCart.items.indexOf(item);
        this.myCart.items.splice(ar, 1);
    }

    totalPay() {
        let suma = 0;
        for (const key of this.myCart.items) {
            const suma2 = this.totalPayByItem(key.quantity, key.price);
            suma = suma2 + suma;
        }
        return suma;
    }

    totalPayByItem(a: number, b: number) {
        return a * b;
    }
}
