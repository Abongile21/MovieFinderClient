import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:4001/api/movies/titles';

  favList = new BehaviorSubject<number>(0);
  wishList: Movie[] = [];
  wishListGenres: string[] = [];

  constructor(private http: HttpClient) { }

  getMovies = (): Observable<any[]> => this.http.get<any[]>(this.apiUrl);
  
  getMovieById = (id: string): Observable<any> => this.http.get<any>(`${this.apiUrl}/${id}`);

  addToWishlist = (movie: Movie): void => {
    const alreadyInWishlist = this.wishList.some(({ title }) => title === movie.title);
    if (!alreadyInWishlist) {
      this.wishList.push(movie);
      this.updateWishlistGenres(movie.genre);
      this.favList.next(this.favList.value + 1);
      console.log(this.favList.value);
    } else {
      console.log("Movie already exists in wishlist!");
    }
  }

  updateWishlistGenres = (genre: string): void => {
    this.wishListGenres.push(genre);
  }
  

  getWishlist = (): Movie[] => this.wishList;

  getMostCommonGenre = (): string => {
    const genreCounts: { [genre: string]: number } = {};
    let mostCommonGenre: string | null = null;
    let maxCount = 0;

    for (const genre of this.wishListGenres) {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      if (genreCounts[genre] > maxCount) {
        mostCommonGenre = genre;
        maxCount = genreCounts[genre];
      }
    }

    return mostCommonGenre || ''; // Return an empty string if no genre is found
  }

  getRecommendedMovies = (): Movie[] => {
    const mostCommonGenre = this.getMostCommonGenre();
    return this.wishList.filter(movie => movie.genre === mostCommonGenre && !this.isInWishlist(movie));
  }

  isInWishlist = (movie: Movie): boolean => this.wishList.some(({ title }) => title === movie.title);
}
