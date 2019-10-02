import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ShopListComponent } from './Components/shop-list/shop-list.component'
import { ItemDetailsComponent } from './Components/item-details/item-details.component'


const routes: Routes = [
      { path: '', redirectTo: '/shoplist', pathMatch: 'full'},
      { path: 'shoplist', component: ShopListComponent},
      { path: 'item/:id', component: ItemDetailsComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
