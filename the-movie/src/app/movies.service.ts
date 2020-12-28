import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from './interface/movie';
import { HttpClient } from '@angular/common/http';
import * as data from './db/movies.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private pelis;

  constructor(/* private http: HttpClient */) {
    this.pelis = JSON.parse(JSON.stringify(data.movies));
  }

  getMovies(){ //: Observable<Movie[]> {
    //return this.http.get<Movie[]>(environment.URL);
    return this.pelis;
  }

  getMovie(_id: number)/* : Observable<Movie>  */{
    //return this.http.get<Movie>(environment.URL + '/' + _id);
    return this.pelis.filter(k => k.id == _id)[0];
  }
}
