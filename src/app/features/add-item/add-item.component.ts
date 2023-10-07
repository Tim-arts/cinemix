import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsDto, RequestParams } from '../../core/interfaces/item';
import { ItemService } from '../../core/services/item/item.service';

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

  constructor(private readonly itemService: ItemService) {
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

    this.items$ = this.itemService.fetchItems(requestParams);
  }

}
