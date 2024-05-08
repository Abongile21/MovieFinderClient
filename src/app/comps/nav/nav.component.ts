import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  favListCount$ = new BehaviorSubject<number>(0);
  cartCount$ = new BehaviorSubject<any>(0)
  
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.favListCount$ = this.movieService.favList

  }
}
