import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'

})


export class HomeComponent {
  searchTerm!: string;

  performSearch() {
    // Implement your search logic here
    console.log('Performing search for:', this.searchTerm);
  }
}