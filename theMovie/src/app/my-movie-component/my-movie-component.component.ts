import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import Movie from '../interface/movie';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss'],
})
export class MyMovieComponentComponent implements OnInit {
  private suscripcion: Subscription;

  peli_actual: Movie;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private servicioPeli: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.suscripcion = this.servicioPeli
      .getMovie$(this.id)
      .subscribe((movie) => (this.peli_actual = movie));
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
