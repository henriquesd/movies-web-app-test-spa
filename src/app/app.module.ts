import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movies/movie/movie.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MovieListComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
