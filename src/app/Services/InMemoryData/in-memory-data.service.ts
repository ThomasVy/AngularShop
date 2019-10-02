import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Item } from '../../Model/item';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  	const items: Item[] = [
  	 {id:11, name: "Bat"},
  	 {id:12, name: "Shoe"},
  	 {id:13, name: "Shovel"},
  	 {id:14, name: "Cat"},
  	 {id:15, name: "Box"},
  	 {id:16, name: "Hat"},
  	 {id:17, name: "Glove"},
  	 {id:18, name: "Mitten"},
  	 {id:19, name: "Boot"},
  	 {id:20, name: "Computer"},
  	 {id:21, name: "Phone"},
  	 {id:22, name: "Marker"},
  	 {id:23, name: "Tape"},
  	 {id:24, name: "Pen"},
  	 {id:25, name: "Brain"},
  	 {id:26, name: "Controller"},
  	];
  	return {items};
  }
  
  genId(items: Item[]): number {
  	return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}
