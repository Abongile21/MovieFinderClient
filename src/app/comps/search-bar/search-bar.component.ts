import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchQueryChange = new EventEmitter<string>();
  searchQuery: string = '';

  constructor() {}

  searchMovie() {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
