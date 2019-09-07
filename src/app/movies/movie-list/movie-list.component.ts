import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  public searchTerm = '';
  public actualPage = 1;
  public totalResults = 0;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.getMovies(this.actualPage);
  }

  async getMovies(actualPage) {
      this.http.get('https://movieswebapp.azurewebsites.net/api/movies?page=' + actualPage).subscribe(response => {
        this.movies = response['results'];
        this.actualPage = response['page'];
        this.totalResults = response['total_results'];
      }, error => {
        console.log('An error occurred on get the records.');
      });
  }

  details(movieId) {
    this.router.navigate(['/movie/' + movieId]);
  }

  async search() {
    this.actualPage = 1;

    setTimeout(() => {
    const value = this.searchTerm.toLowerCase();
    if (value !== '') {
          this.searchMovieByTitle(this.searchTerm);
        } else {
          this.getMovies(1);
        }
    }, 1000);
  }

  searchMovieByTitle(value) {
    this.http.get('https://movieswebapp.azurewebsites.net/api/movies/search/' + value + '?page=' + this.actualPage).subscribe(response => {
      this.movies = response['results'];
      this.totalResults = response['total_results'];
    }, error => {
      console.log('An error occurred on get the records.');
    });
  }

  pageChange(e) {
    this.actualPage = e;
    if (this.searchTerm === '') {
      this.getMovies(this.actualPage);
    } else{
      this.searchMovieByTitle(this.searchTerm);
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
