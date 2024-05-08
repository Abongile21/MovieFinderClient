import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = true;
  searchQuery: string = '';
  wishlist: any[] = [];
  recommendedMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
    // Fetch wishlist and recommendations
  }

  getMovies() {
    this.movieService.searchMovie(this.searchQuery).subscribe((data: any[]) => {
      this.movies = data;
      this.loading = false;
    });
  }

  addToWishlist(movie: any) {
    this.wishlist.push(movie);
  }

  removeFromWishlist(movie: any) {
    this.wishlist = this.wishlist.filter(item => item !== movie);
  }

  searchMovie(query: string) {
    this.searchQuery = query;
    this.getMovies();
  }
}
