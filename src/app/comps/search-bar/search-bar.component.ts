import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Movie } from '../../movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService){}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    
  }
  
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

  searchMovie() {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
