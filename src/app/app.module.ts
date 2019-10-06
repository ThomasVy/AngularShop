import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopListComponent } from './Components/shop-list/shop-list.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';
import { MessageComponent } from './Components/message/message.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/InMemoryData/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShoppingCartComponent,
    ItemDetailsComponent,
    TopNavBarComponent,
    MessageComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Remove once a real server is implemented
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
