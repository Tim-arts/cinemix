import { TestBed } from '@angular/core/testing';

import { RandomSuggestionService } from './random-suggestion.service';

describe('RandomSuggestionService', () => {
  let service: RandomSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
