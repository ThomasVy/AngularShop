import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ShopListComponent } from './Components/shop-list/shop-list.component'

const routes: Routes = [
      { path: '', component: ShopListComponent}
      // { path: 'products/:productId', component: ProductDetailsComponent }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
