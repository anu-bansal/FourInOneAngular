import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MoviesComponent } from './components/main-menu/movies/movies.component';
import { MovieSearchComponent } from './components/main-menu/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/main-menu/movies/movie-list/movie-list.component';
import { MovieComponent } from './components/main-menu/movies/movie-list/movie/movie.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
