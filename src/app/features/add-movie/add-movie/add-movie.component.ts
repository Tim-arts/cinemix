import { Component } from '@angular/core';
import { Movie } from '../../../core/interfaces/movie';
import { MovieService } from '../../../core/services/movie/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  constructor(private readonly movieService: MovieService) {}

  addMovie(movieData: Movie) {

  }
}
