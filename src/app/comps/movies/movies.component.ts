import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  wishlist: Movie[] = [];
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  showMainList: boolean = true; // Flag to control main list visibility

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.movies;
        this.filteredMovies = this.movies; // Initialize filteredMovies
      },
      error: (err) => {
        console.error("Could not retrieve movies", err);
      }
    });
  }

  addToWishlist(item: Movie): void {
    this.movieService.addToWishlist(item);
  }

  onSearchChange(searchTerm: any): void {
    if (searchTerm.trim() !== '') {
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.showMainList = false; // Hide main list when searching
    } else {
      this.filteredMovies = this.movies;
      this.showMainList = true; // Show main list when no search term
    }
  }
}
