import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';
import Movie from '../interface/movie';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss'],
})
export class MyHomeComponentComponent implements OnInit {
  suscripciones: Subscription[];
  // peliculas: Movie[];
  peliculas = this.serveiPelis.getMovies();

  constructor(private serveiPelis: MoviesService) {
    this.suscripciones = [];
  }

  ngOnInit(): void {
    // this.serveiPelis.getMovies().subscribe((dades) => {
    //   this.peliculas = dades;
    //   /* console.log(dades); */
    // });
  }
}
