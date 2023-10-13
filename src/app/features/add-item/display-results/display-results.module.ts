import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayResultsComponent } from './display-results.component';

@NgModule({
  declarations: [DisplayResultsComponent],
  exports: [DisplayResultsComponent],
  imports: [
    CommonModule
  ]
})
export class DisplayResultsModule {
}
