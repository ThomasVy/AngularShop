import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Item } from '../../Model/item';
import { MessageService } from '../../Services/message/message.service';

@Injectable({
  providedIn: 'root'
})

export class ShopListService {
  private itemsUrl = 'http://localhost:3000/items';
  httpOptions = {
  	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
  			  private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
  	return this.http.get<Item[]>(this.itemsUrl)
  		.pipe(
  			tap(_ => this.log("fetched items")),
  			catchError(this.handleError<Item[]>('getItems', []))
  			);
  }

  getItem<Data>(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url)
      .pipe(
        tap(i => {
          const outcome = i ? `fetched` : `did not find`;
          this.log(`${outcome} item id=${id}`);
        }),
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
  }

  searchItems(searchTerm: string): Observable<Item[]>
  { 
    if(!searchTerm.trim())
    {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}?search=${searchTerm}`).pipe(
      tap(_ => this.log(`found heroes matching "${searchTerm}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
      );
  }

  updateItem (item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item._id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T)
  {
  	return (error: any):Observable<T> => {
  		console.error(error);
  		this.log(`${operation} failed: ${error.message}`);
  		return of(result as T);
  	}
  }

  private log(message: string)
  {
  	this.messageService.add(`ShopListService: ${message}`);
  }
}
