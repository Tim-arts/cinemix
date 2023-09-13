import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [
    MovieFormComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddMovieModule {
}
