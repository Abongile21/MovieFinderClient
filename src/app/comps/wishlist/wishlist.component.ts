import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: './wishlist.component.css'
})
export class WishlistComponent {
  movies: Movie[] = []; // Initialize an empty array to store movies

  // Define a Movie interface to represent the structure of the movie
  // interface Movie{
  //   title : string;
  //   Year : number;
  //   genre : string;
  //   poster : string;

  // }
 addToWishlist(movieId: number): void{
  const movie = this.movies.find(m => m.id === movieId);
  if (movie && !this.addToWishlist.some(m => m.id === movie.id)){
    this.wishlist.push(movie);
  }
 }
  // Method to remove movies from the wishlist
  removeFromWishlist(movie : Movie): void{
    const index = this.movies.findIndex(m => m.title === movie.title );
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
  }
}
