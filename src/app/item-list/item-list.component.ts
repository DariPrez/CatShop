import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[];
  // public totalItems() {
  //   let suma = 0;
  //   for (let i = 0; i < this.myItems.length; i++) { // for (let myItems of this.myItems){ suma += myItems.stock; }
  //     suma += this.myItems[i].stock;
  //   }
  //   return suma;
  // }

  constructor() { }

  ngOnInit() {
    this.myItems = ITEMS;
  }

  public totalItems() {
    return this.myItems.reduce((prev, current) => prev + current.stock, 0);
  }
}
