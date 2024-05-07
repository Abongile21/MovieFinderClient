import { Component, OnIt, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  searchQuery: string = '';

  // consgtructor() {}
  // ngOnit() void{}
  // enterSearchValue: string = '',

  @Output() search: EventEmitter<string> = new EventEmitter<string>()
  onSearchTextExchanged() {}

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}