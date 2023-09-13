import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedItemsToNumberPipe } from './pipes/selected-items-to-number/selected-items-to-number.pipe';

@NgModule({
  declarations: [
    SelectedItemsToNumberPipe,
  ],
  exports: [
    SelectedItemsToNumberPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
