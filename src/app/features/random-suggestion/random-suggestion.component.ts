import { Component } from '@angular/core';
import { Movie } from '../../core/interfaces/movie';
import { RandomSuggestionService } from '../../core/services/random-suggestion/random-suggestion.service';

@Component({
  selector: 'app-random-suggestion',
  templateUrl: './random-suggestion.component.html',
  styleUrls: ['./random-suggestion.component.scss']
})
export class RandomSuggestionComponent {
  randomSuggestion: Movie | null = null;

  constructor(private randomSuggestionService: RandomSuggestionService) {}

  ngOnInit() {
    this.getRandomSuggestion();
  }

  getRandomSuggestion() {
    this.randomSuggestionService.getRandomSuggestion()
  }
}
