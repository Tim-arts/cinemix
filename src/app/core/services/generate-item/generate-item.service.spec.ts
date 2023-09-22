import { TestBed } from '@angular/core/testing';

import { GenerateItemService } from './generate-item.service';

describe('RandomSuggestionService', () => {
  let service: GenerateItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
