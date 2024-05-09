// recommendations.component.ts

import { Component, Input } from '@angular/core';
import { Movie } from '../../movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  @Input() recommendedGenre: any;
  recommendedMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnChanges() {
    this.loadRecommendedMovies();
  }

  loadRecommendedMovies() {
    this.recommendedMovies = this.movieService.getRecommendedMovies(this.recommendedGenre);
  }

  addToWishlist(movie: Movie) {
    if (!this.movieService.isInWishlist(movie)) {
      this.movieService.addToWishlist(movie);
      console.log('Added to wishlist:', movie);
    } else {
      console.log('Movie is already in the wishlist:', movie);
    }
  }
}
