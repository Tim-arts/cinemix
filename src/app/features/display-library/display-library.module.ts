import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DisplayLibraryComponent } from './display-library.component';

@NgModule({
  declarations: [
    DisplayLibraryComponent,
  ],
  exports: [
    DisplayLibraryComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ]
})
export class DisplayLibraryModule {
}
