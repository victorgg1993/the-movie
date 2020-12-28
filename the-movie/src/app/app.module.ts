import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
