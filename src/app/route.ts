import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieComponent } from './movies/movie/movie.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MovieListComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]