import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLibraryComponent } from './display-library.component';

describe('DisplayLibraryComponent', () => {
  let component: DisplayLibraryComponent;
  let fixture: ComponentFixture<DisplayLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLibraryComponent]
    });
    fixture = TestBed.createComponent(DisplayLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
