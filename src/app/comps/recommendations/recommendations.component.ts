import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendedMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.recommendedMovies = this.movieService.getRecommendedMovies();
  }
  
  }
