import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayLibraryComponent } from './display-library.component';

@NgModule({
  declarations: [
    DisplayLibraryComponent
  ],
  exports: [
    DisplayLibraryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DisplayLibraryModule {
}
