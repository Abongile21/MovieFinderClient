import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string;

  performSearch() {
    // Implement your search logic here
    console.log('Performing search for:', this.searchTerm);
  }
}