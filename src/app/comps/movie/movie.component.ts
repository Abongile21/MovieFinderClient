import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'; 
import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'] 
})
export class MovieComponent {

  movies: any = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  getAllMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.movies;
        this.filteredMovies = this.movies;
      },
      error: (err) => {
        console.error("Could not retrieve movies", err);
      }
    });
  }

  getOneMovie(movieId: string): void {
    this.movieService.getMovieById(movieId).subscribe({
      next: (data: any) => {
        console.log("Movie details:", data);
      },
      error: (err) => {
        console.error("Could not retrieve movie details", err);
      }
    });
  }

}
