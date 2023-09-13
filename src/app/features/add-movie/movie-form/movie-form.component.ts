import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../../core/interfaces/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {

  @Output() addMovie = new EventEmitter<Movie>();

  movieForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const movieData: Movie = this.movieForm.value;
      this.addMovie.emit(movieData);
      this.movieForm.reset();
    }
  }

}
