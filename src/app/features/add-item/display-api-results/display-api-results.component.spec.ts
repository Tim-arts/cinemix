import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayApiResultsComponent } from './display-api-results.component';

describe('DisplayApiResultsComponent', () => {
  let component: DisplayApiResultsComponent;
  let fixture: ComponentFixture<DisplayApiResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayApiResultsComponent]
    });
    fixture = TestBed.createComponent(DisplayApiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
