import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ItemDto, ItemsDto, RequestParams } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly URL_API: string = `http://www.omdbapi.com/?apikey=${environment.omdbApiKey}`;
  private readonly localStorageKey: string = 'cinemix-library';

  constructor(private readonly httpClient: HttpClient) {
  }

  fetchItems(requestParams: RequestParams): Observable<ItemsDto> {
    const params: string = `&s=${requestParams.title}&page=${requestParams.page}`;
    return this.httpClient.get<ItemsDto>(`${this.URL_API}${params}`);
  }

  getItems(): ItemDto[] {
    const storedItems: string | null = localStorage.getItem(this.localStorageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  getSelectedItems(items: ItemDto[]): Array<ItemDto | undefined> {
    if (!items || items?.length === 0) {
      throw new Error('items are undefined');
    }

    const storedItems: ItemDto[] = this.getItems();
    const comparisonItems: ItemDto[] = items.filter((item1: ItemDto) => storedItems.some((item2: ItemDto): boolean => item1.imdbID === item2.imdbID));
    let selectedItems: Array<ItemDto | undefined> = [];

    items.forEach((item1: ItemDto): void => {
      const isSelected: boolean = !!comparisonItems.find((item2: ItemDto): boolean => item1.imdbID === item2.imdbID);
      selectedItems.push(isSelected ? item1 : undefined);
    });

    return selectedItems;
  }

  setItems(items: ItemDto[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

  isItemAlreadySelected(item: ItemDto): boolean {
    const items: ItemDto[] = this.getItems();
    return !!items.find((x: ItemDto): boolean => x.imdbID === item.imdbID);
  }

  setItem(item: ItemDto): void {
    const items: ItemDto[] = this.getItems();
    items.push(item);

    this.setItems(items);
  }

  removeItem(item: ItemDto): void {
    let items: ItemDto[] = this.getItems();
    items = items.filter((x: ItemDto): boolean => x.imdbID !== item.imdbID);

    this.setItems(items);
  }

}
