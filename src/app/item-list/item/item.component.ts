import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items: Item;

  constructor() { }

  ngOnInit() {
  }

}
