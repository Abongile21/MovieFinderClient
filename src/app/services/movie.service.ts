import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:4001/api/movies/titles';

  constructor(private http: HttpClient) {}


  searchMovie(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?search=${query}`);
  }

  getAllMovies(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
