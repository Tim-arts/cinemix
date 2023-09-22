import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbPagination,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationNumber, NgbPaginationPrevious
} from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './add-item.component';
import { DisplayApiResultsModule } from './display-api-results/display-api-results.module';
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
    NgbPaginationFirst,
    NgbPaginationLast,
    NgbPaginationNext,
    NgbPaginationNumber,
    NgbPaginationPrevious,
    ReactiveFormsModule,
    DisplayApiResultsModule,
  ]
})
export class AddItemModule {
}
