import { Component, OnInit} from '@angular/core';
import { Movie } from '../../movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})



export class WishlistComponent implements OnInit{
  movies: Movie[] = []; // Initialize an empty array to store movies
  wishlist:any

  constructor(private movieService: MovieService){
  }

  ngOnInit(): void {
    this.wishlist = this.movieService.getWishlist()}
  
//  addToWishlist(movieId: number): void{
//   const movie = this.movies.find(m => m.id === movieId);
//   if (movie && !this.wishlist.some(m => m.id === movie.id)){
//     this.wishlist.push(movie);
//   }
//  }
  // Method to remove movies from the wishlist


  getWishlist(){
    
  }
  removeFromWishlist(movie : Movie): void{
    const index = this.movies.findIndex(m => m.title === movie.title );
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
  }
  
  removeItem(index:any,e:Event) {
    this.movieService.favList.next(this.movieService.favList.value - 1)
    this.wishlist.splice(index, 1);
    
    // localStorage.setItem('for', JSON.stringify(this.items))
  }

}
