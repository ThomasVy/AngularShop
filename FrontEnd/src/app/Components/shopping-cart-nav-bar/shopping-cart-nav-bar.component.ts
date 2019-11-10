import { Component, OnInit } from '@angular/core';
import { ShoppingCartService }  from '../../Services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-nav-bar',
  templateUrl: './shopping-cart-nav-bar.component.html',
  styleUrls: ['./shopping-cart-nav-bar.component.scss']
})
export class ShoppingCartNavBarComponent implements OnInit {
  numberOfItems: Number;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  	this.getNumberOfItems();
  }

  getNumberOfItems(): void
  {
  	this.shoppingCartService.getNumberOfItems().subscribe(numberOfItems => this.numberOfItems = numberOfItems);
  }

}
