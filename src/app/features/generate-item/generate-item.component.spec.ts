import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateItemComponent } from './generate-item.component';

describe('GenerateComponent', () => {
  let component: GenerateItemComponent;
  let fixture: ComponentFixture<GenerateItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateItemComponent]
    });
    fixture = TestBed.createComponent(GenerateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
