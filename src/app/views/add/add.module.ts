import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbPagination,
  NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext,
  NgbPaginationNumber,
  NgbPaginationPrevious
} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { AddItemModule } from '../../features/add-item/add-item.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [AddComponent],
  exports: [AddComponent],
  imports: [
    CommonModule,
    CoreModule,
    AddRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    NgbPagination,
    NgbPaginationFirst,
    NgbPaginationPrevious,
    NgbPaginationNumber,
    NgbPaginationNext,
    NgbPaginationLast,
    AddItemModule,
  ]
})
export class AddModule {
}
