import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemListService } from './item-list.service';
import { Cart } from '../order/cart/cart.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myCats: Item[];
  mySearch: string;
  myCart: Cart;
  // public totalItems() {
  //   let suma = 0;
  //   for (let i = 0; i < this.myCats.length; i++) { // for (let myCats of this.myCats){ suma += myCats.stock; }
  //     suma += this.myCats[i].stock;
  //   }
  //   return suma;
  // }

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.itemListService.getItemList()
                        .subscribe(myCats => this.myCats = myCats);
    this.myCart = new Cart();
    this.myCart.items = new Array<Item>();
    // this.myCats = this.itemListService.getItemList();
  }

  public totalItems() {
    // tslint:disable-next-line:whitespace
    return this.myCats ? this.myCats.reduce((prev, current) => prev + current.stock, 0):0;
  }

  public upQuantity(item: Item) {
    item.quantity++;
    item.stock--;
  }

  public downQuantity(item: Item) {
    item.quantity--;
    item.stock++;
  }

  public disabled(item: Item) {
    if (item.editable) {
      item.editable = false;
    }else {
      item.editable = true;
    }
  }

  getUpdateService(item: Item) {
    this.disabled(item);
    this.itemListService.updateItem(item)
                           .subscribe();
  }

  addToCart(item: Item) {
    this.myCart.items.push(item);
  }

  // searchText(name) {
  //   console.log(name);
  // }
  // showKey(event) {
  //   alert(event.keyCode);
  // }

  // getCoord(event) {
  //   console.log(event.clientX + ', ' + event.clientY);
  // }

}
