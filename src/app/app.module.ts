import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { ItemComponent } from './item-list/item/item.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';
import { CartService } from './order/cart/cart.service';
import { ShippingInformationComponent } from './order/shipping-information/shipping-information.component';

const appRoutes: Routes = [
  { path: 'order', component: OrderComponent },
  {
    path: 'item-list',
    component: ItemListComponent,
    data: { title: 'Cats List' }
  },
  { path: '',
    redirectTo: '/item-list',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchPipe,
    ItemComponent,
    OrderComponent,
    CartComponent,
    ShippingInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [
    ItemListService,
    CartService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
