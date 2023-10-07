import { Injectable } from '@angular/core';
import { ItemDto } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private readonly localStorageKey: string = 'cinemix-library';

  getItems(): ItemDto[] {
    const storedItems: string | null = localStorage.getItem(this.localStorageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  setItems(items: ItemDto[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

  isAlreadyExisting(items: ItemDto[], item: ItemDto): boolean {
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
