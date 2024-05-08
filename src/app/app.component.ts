import { Component, OnInit } from '@angular/core';
import { MovieService } from '././services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

 
}