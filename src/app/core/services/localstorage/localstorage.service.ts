import { Injectable } from '@angular/core';
import { ItemDto } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private readonly localStorageKey: string = 'selectedItems';

  getSelectedItems(): ItemDto[] {
    const storedItems = localStorage.getItem(this.localStorageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  setSelectedItems(items: ItemDto[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

}
