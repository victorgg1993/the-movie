import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from './interface/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies$(): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.URL);
  }

  getMovie$(_id: number): Observable<Movie> {
    return this.http.get<Movie>(environment.URL + '/' + _id);
  }
}
