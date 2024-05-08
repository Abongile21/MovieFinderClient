import { Component } from '@angular/core';
import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})



export class WishlistComponent {
  movies: Movie[] = [];
  wishlist: Movie[]=[];

  
 addToWishlist(movieId: number): void{
  const movie = this.movies.find(m => m.id === movieId);
  if (movie && !this.wishlist.some(m => m.id === movie.id)){
    this.wishlist.push(movie);
  }
 }
  removeFromWishlist(movie : Movie): void{
    const index = this.movies.findIndex(m => m.title === movie.title );
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
  }
}
