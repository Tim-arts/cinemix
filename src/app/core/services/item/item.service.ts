import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ItemDto, ItemsDto, RequestParams } from '../../interfaces/item';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly URL_API: string = `http://www.omdbapi.com/?apikey=${environment.omdbApiKey}`;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly localStorageService: LocalstorageService,
  ) {
  }

  fetchItems(requestParams: RequestParams): Observable<ItemsDto> {
    const params: string = `&s=${requestParams.title}&page=${requestParams.page}`;
    return this.httpClient.get<ItemsDto>(`${this.URL_API}${params}`);
  }

  isAlreadyExisting(item: ItemDto): boolean {
    const items: ItemDto[] = this.localStorageService.getItems();
    return this.localStorageService.isAlreadyExisting(items, item);
  }

  addItem(item: ItemDto): void {
    this.localStorageService.setItem(item);
  }

  removeItem(item: ItemDto): void {
    this.localStorageService.removeItem(item);
  }

}
