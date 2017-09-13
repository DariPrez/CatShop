import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myCart: Cart;
  total = 0;

  totalPay: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.totalPay = this.cartService.totalPay();
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
