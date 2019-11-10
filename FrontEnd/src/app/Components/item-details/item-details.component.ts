import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item }         from '../../Model/item';
import { ShopListService }  from '../../Services/shop-list/shop-list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Item;
  constructor
  ( 
  	private route: ActivatedRoute,
    private shopListService: ShopListService,
    private location: Location
  ) 
  { }

  ngOnInit() {
  	this.getItem();
  }

   getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shopListService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.shopListService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }

 delete(): void{
   alert("not implemented yet");
 }

 addToShoppingCart(): void{
   alert("not implemented yet");
 }

}
