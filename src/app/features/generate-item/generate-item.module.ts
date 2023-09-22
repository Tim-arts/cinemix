import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateItemComponent } from './generate-item.component';

@NgModule({
  declarations: [GenerateItemComponent],
  exports: [GenerateItemComponent],
  imports: [
    CommonModule
  ]
})
export class GenerateItemModule {
}
