import { Component, OnInit } from '@angular/core';
import { MovieService } from '././services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(
        (data: any) => {
          this.movies = data.results;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}