import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }


   ngOnInit() {
    let movieId;
    this.route.params.subscribe(params => {
      movieId = params['id'];
    });

    this.getMovie(movieId);
  }

   async getMovie(movieId) {

    if (movieId != null) {

      await this.http.get('https://movieswebapp.azurewebsites.net/api/movies/details/' + movieId).subscribe(response => {
        this.movie = response;
        let genre = '';

        if (response['genres'].length >= 0) {
          for (let i = 0; i < response['genres'].length; i++) {
            if (genre === '') {
              genre = response['genres'][i].name;
            } else {
              genre = genre + ', ' + response['genres'][i].name;
            }
          }
          this.movie.genre = genre;
        }
      }, error => {
        console.log('An error occurred on get the records.');
      });
    }
  }

  back() {
    this.router.navigate(['/movies']);
  }

}
