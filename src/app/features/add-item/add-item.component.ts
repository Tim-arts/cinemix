import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsDto, RequestParams } from '../../core/interfaces/movie';
import { FetchItemsService } from '../../core/services/fetch-items/fetch-items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  protected items$!: Observable<ItemsDto>;
  protected searchTerm!: string;
  protected pageSize: number = 10;
  protected page: number = 1;

  constructor(private readonly fetchItemsService: FetchItemsService) {
  }

  onPageChange(page: number): void {
    this.page = page;
    this.fetchItems();
  }

  onSearchTerm(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.fetchItems();
  }

  fetchItems(): void {
    const requestParams: RequestParams = {
      title: this.searchTerm,
      page: this.page,
    };

    this.items$ = this.fetchItemsService.searchMovies(requestParams);
  }

}
