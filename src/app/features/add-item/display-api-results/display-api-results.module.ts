import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayApiResultsComponent } from './display-api-results.component';

@NgModule({
  declarations: [DisplayApiResultsComponent],
  exports: [DisplayApiResultsComponent],
  imports: [
    CommonModule
  ]
})
export class DisplayApiResultsModule {
}
