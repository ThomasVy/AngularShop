import { Component, OnInit } from '@angular/core';
import { Item } from '../../Model/item';
import { ShopListService } from '../../Services/shop-list/shop-list.service'
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  items: Item[];

  constructor(private itemListService: ShopListService) { }
  
  ngOnInit() {
  	this.getItems();
  }

  getItems(): void {
  	this.itemListService.getItems().subscribe(items => this.items = items);
  }

}
