import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart.model';
import { Item } from '../item-list/item.model'; // TODO BORRAR

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myCart: Cart;
  total = 0;
  ordered: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.myCart = this.cartService.myCart;
    this.ordered = false;
  }

  updateTotal(total) {
    this.total = total;
  }
// ReactiveFormsModule Validators FormBuilder FormsGroup
// FormControlName    (submit)=submitForm($event)
// form.valid
// <pre>{{myForm.valid | json}}</pre>
// ng g component shipping-information NOMBRE ADDRESS E-MAIL

}

// @Output()
//   Shipping: EventEmitter<ShippingInfo> (la info del input) = new event

//   Sumit(){
//     new shipping.emit Order-[desabled]
//   }
