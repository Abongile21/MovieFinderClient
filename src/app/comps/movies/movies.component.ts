import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.interface';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  wishlist: Movie[] = [];
  movies: Movie[] = [];
  // filteredMovies: Movie[] = [];
  showMainList: boolean = true; // Flag to control main list visibility
  searchQuery = '';
  filteredMovies$: Observable<any>;
  private searchSubject = new BehaviorSubject<string>('');
  
  constructor(private movieService: MovieService) { 
    this.filteredMovies$ = this.searchSubject.pipe(
      debounceTime(300), // Wait for 300ms after each keystroke
      distinctUntilChanged(), // Only emit if the value has changed
      map(query => this.filterMovies(query))
    );
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  filterMovies(query: string): any[] {
    if (!query.trim()) {
      return this.movies; 
    }
    
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase()) ||
      movie.year.toString().includes(query)
    );
  }
  getAllMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.movies;
        // this.filteredMovies = this.movies; // Initialize filteredMovies
      },
      error: (err) => {
        console.error("Could not retrieve movies", err);
      }
    });
  }

  addToWishlist(item: Movie): void {
    this.movieService.addToWishlist(item);
  }

 

  searchMovies() {
    this.searchSubject.next(this.searchQuery);
  }
}
