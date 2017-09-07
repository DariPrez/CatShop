import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myCats = [{
    'id': 1,
    'name': 'Angora',
    'description': 'Los angora son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 5,
    'price': 12.50
  }, {
    'id': 2,
    'name': 'Otto',
    'description': 'Los Ottos son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 8,
    'price': 10.50
  }, {
    'id': 3,
    'name': 'Egipcio',
    'description': 'Los Egipcios son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 0,
    'price': 15.50
  }];

  // public totalItems() {
  //   let suma = 0;
  //   for (let i = 0; i < this.myCats.length; i++) { // for (let myCats of this.myCats){ suma += myCats.stock; }
  //     suma += this.myCats[i].stock;
  //   }
  //   return suma;
  // }

  constructor() { }

  ngOnInit() {
  }

  public totalItems() {
    return this.myCats.reduce((prev, current) => prev + current.stock, 0);
  }
}
