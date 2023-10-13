import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbPagination,
  NgbPaginationNumber,
} from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './add-item.component';
import { DisplayResultsModule } from './display-results/display-results.module';
import { SearchItemComponent } from './search-item/search-item.component';

@NgModule({
  declarations: [
    AddItemComponent,
    SearchItemComponent
  ],
  exports: [
    AddItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPagination,
    NgbPaginationNumber,
    ReactiveFormsModule,
    DisplayResultsModule,
  ]
})
export class AddItemModule {
}
