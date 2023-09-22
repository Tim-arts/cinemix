import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemsDto, RequestParams } from '../../core/interfaces/movie';
import { FetchItemsService } from '../../core/services/fetch-items/fetch-items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  items$!: Observable<ItemsDto>;
  searchForm: UntypedFormGroup = new UntypedFormGroup({
    searchTerm: new UntypedFormControl('Star wars')
  });
  pageSize: number = 10;
  page: number = 1;

  constructor(private readonly fetchItemsService: FetchItemsService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  pageChange(page: number): void {
    this.page = page;
    this.fetchItems();
  }

  fetchItems(): void {
    const requestParams: RequestParams = {
      title: this.searchForm.get('searchTerm')?.value,
      page: this.page,
    };

    this.items$ = this.fetchItemsService.searchMovies(requestParams);
  }

}
