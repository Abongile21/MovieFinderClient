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

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.updateRecommendations();
    this.movieService.favList.subscribe(() => {
      this.updateRecommendations();
    });
  }

  updateRecommendations() {
    this.recommendedMovies = this.movieService.getRecommendedMovies();
  }

  addToWishlist(movie: Movie) {
    this.movieService.addToWishlist(movie);
  }
}
