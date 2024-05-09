import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendedMovies: Movie[] = [];
  error: string | null = null; // Error message placeholder

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.updateRecommendations(); // Initial call to update recommendations
    this.movieService.favList.subscribe(() => {
      this.updateRecommendations(); // Update recommendations when favorites change
    });
  }

  updateRecommendations() {
    try {
      this.recommendedMovies = this.movieService.getRecommendedMovies();
      this.error = null; // Reset error message if no error
    } catch (error) {
      this.error = 'Error fetching recommended movies.'; // Set error message
      console.error('Error fetching recommended movies:', error); // Log the error
    }
  }

  addToWishlist(movie: Movie) {
    try {
      this.movieService.addToWishlist(movie);
    } catch (error) {
      console.error('Error adding to wishlist:', error); // Log the error
    }
  }
}
