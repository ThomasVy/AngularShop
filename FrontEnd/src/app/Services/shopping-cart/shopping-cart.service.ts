import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private tempNumItems: Number = 20;
  constructor() { }
  getNumberOfItems(): Observable<Number>
  {
  	return of(this.tempNumItems);
  }
}
