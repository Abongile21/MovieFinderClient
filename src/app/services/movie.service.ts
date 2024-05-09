import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:4001/api/movies/titles';

  favList = new BehaviorSubject<number>(0)
  wishList:Movie[] = []

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addToWishlist(movie: Movie){
    const movieAlready = this.wishList.find(({title}) => title === movie.title);
    if (!movieAlready) {
      this.wishList.push(movie); 
    
      this.favList.next(this.favList.value + 1);
      console.log(this.favList.value)
      return;
    }else{
      console.log("Movie already Exist!")
    }
  }

  getWishilist():Movie[]{
    return this.wishList;
  }

  getRecommendedMovies(): Movie[] {
    const genreCounts: { [key: string]: number } = {};
  
    this.wishList.forEach(movie => {
      genreCounts[movie.genre] = (genreCounts[movie.genre] || 0) + 1;
    });
  
    let mostCommonGenre = '';
    let maxCount = 0;
  
    Object.entries(genreCounts).forEach(([genre, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostCommonGenre = genre;
      }
    });
  
    return this.wishList.filter(movie => movie.genre === mostCommonGenre);
  }
  


}
