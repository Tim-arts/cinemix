import { Component, Input } from '@angular/core';
import { ItemDto } from '../../../core/interfaces/item';
import { ItemService } from '../../../core/services/item/item.service';

@Component({
  selector: 'app-display-api-results',
  templateUrl: './display-api-results.component.html',
  styleUrls: ['./display-api-results.component.scss']
})
export class DisplayApiResultsComponent {

  selectedItems: Array<ItemDto | undefined> = new Array(10).fill(undefined);

  @Input() items!: ItemDto[];

  constructor(private readonly itemService: ItemService) {
  }

  toggleSelected(index: number, item: ItemDto): void {
    const isItemAlreadySelected: boolean = this.itemService.isAlreadyExisting(item);

    if (isItemAlreadySelected) {
      this.selectedItems[index] = undefined;
      this.itemService.removeItem(item);

      return;
    }

    this.selectedItems[index] = item;
    this.itemService.setItem(item);
  }

}
