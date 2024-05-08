import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
query: any;
searchComponent: any;
onSearch() {
throw new Error('Method not implemented.');
}

performSearch() {
throw new Error('Method not implemented.');
}

  @Output() searchQueryChange = new EventEmitter<string>();
  searchQuery: string = '';
searchTerm: any;

  constructor() {}

  searchMovie() {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
