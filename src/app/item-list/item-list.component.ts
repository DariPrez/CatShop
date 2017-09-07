import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { CATS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myCats: Item[];
  // public totalItems() {
  //   let suma = 0;
  //   for (let i = 0; i < this.myCats.length; i++) { // for (let myCats of this.myCats){ suma += myCats.stock; }
  //     suma += this.myCats[i].stock;
  //   }
  //   return suma;
  // }

  constructor() { }

  ngOnInit() {
    this.myCats = CATS;
  }

  public totalItems() {
    return this.myCats.reduce((prev, current) => prev + current.stock, 0);
  }
}
