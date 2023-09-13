import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSuggestionComponent } from './random-suggestion.component';

describe('RandomSuggestionComponent', () => {
  let component: RandomSuggestionComponent;
  let fixture: ComponentFixture<RandomSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomSuggestionComponent]
    });
    fixture = TestBed.createComponent(RandomSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
