import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopListComponent } from './Components/shop-list/shop-list.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShoppingCartComponent,
    ItemDetailsComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
