import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

const routes: Routes = [
  { path: 'home', component: MyHomeComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie/:id', component: MyMovieComponentComponent },
  { path: '**', component: MyHomeComponentComponent }, // en el futur posar un 404(?)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
