import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../Model/item';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResults: Item[];
  @Input() searchTerm: string;
  @Input() searchHighlight: boolean;
  constructor() { }

  ngOnInit() {
  }

}
