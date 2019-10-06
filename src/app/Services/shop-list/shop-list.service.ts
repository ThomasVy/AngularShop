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
  private shopListUrl = 'api/items';

  httpOptions = {
  	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
  			  private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
  	return this.http.get<Item[]>(this.shopListUrl)
  		.pipe(
  			tap(_ => this.log("fetched items")),
  			catchError(this.handleError<Item[]>('getItems', []))
  			);
  }
  searchItems(searchTerm: string): Observable<Item[]>
  { 
    if(!searchTerm.trim())
    {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.shopListUrl}/?name=${searchTerm}`).pipe(
      tap(_ => this.log(`found heroes matching "${searchTerm}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
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
