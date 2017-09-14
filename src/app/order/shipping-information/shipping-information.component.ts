import { Component, OnInit } from '@angular/core';

import { Client } from './client.model';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.css']
})
export class ShippingInformationComponent implements OnInit {

  model = new Client();
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
