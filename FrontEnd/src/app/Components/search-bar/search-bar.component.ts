import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Item } from '../../Model/item';
import { ShopListService } from '../../Services/shop-list/shop-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  items$: Observable<Item[]>;
  searchHighlight: boolean;
  
  private searchTerm = new Subject<string>();
  constructor(private shopListService: ShopListService) { }

  search(term: string): void{
  	this.searchTerm.next(term);
  }

  ngOnInit() {
  	this.items$ = this.searchTerm.pipe(
  		debounceTime(300),
  		distinctUntilChanged(),
  		switchMap((term: string) => this.shopListService.searchItems(term)));
  }

}
