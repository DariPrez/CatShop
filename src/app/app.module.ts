import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { ItemComponent } from './item-list/item/item.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchPipe,
    ItemComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
