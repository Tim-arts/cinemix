import { Component, Input } from '@angular/core';
import { ItemDto } from '../../../core/interfaces/item';
import { LocalstorageService } from '../../../core/services/localstorage/localstorage.service';

@Component({
  selector: 'app-display-api-results',
  templateUrl: './display-api-results.component.html',
  styleUrls: ['./display-api-results.component.scss']
})
export class DisplayApiResultsComponent {

  selectedItems: Array<ItemDto | undefined> = new Array(10).fill(undefined);

  @Input() items!: ItemDto[];

  constructor(private readonly localStorageService: LocalstorageService) {
  }

  toggleSelected(index: number, item: ItemDto): void {
    this.selectedItems[index] = this.selectedItems[index] ? undefined : item;
  }

}
