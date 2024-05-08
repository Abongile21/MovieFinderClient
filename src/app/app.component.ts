import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
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