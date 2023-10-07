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

  setItems(items: ItemDto[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

  isAlreadyExisting(item: ItemDto): boolean {
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
