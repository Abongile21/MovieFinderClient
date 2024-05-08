import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  wishlist: Movie[] = []
  movies: Movie[] = []

 constructor(private movieService: MovieService){
 }

 ngOnInit(): void {
   this.getAllMOvies()
 }

 getAllMOvies(){
  this.movieService.getAllMovies().subscribe({
    next: (data)=>{
      this.movies = data
      console.log(data)
    },error:(err)=>{
      console.error("Could not retrieve movies", err)
    }
  })


 }

 addToWishlist( item: Movie) {
    const movieExistAlready =  this.wishlist.find(({title})=> title === item.title)

    if(!movieExistAlready){
      this.wishlist.push(item)
      return
    }
    console.log("Movie already in wishlist!")
  }
  viewMovie(id: Movie) {
    
  }

}