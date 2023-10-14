import { Component, Input, OnInit } from '@angular/core';
import { ItemDto } from '../../../core/interfaces/item';
import { ItemService } from '../../../core/services/item/item.service';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.scss']
})
export class DisplayResultsComponent implements OnInit {

  selectedItems!: Array<ItemDto | undefined> | undefined;

  @Input() items!: ItemDto[];

  constructor(private readonly itemService: ItemService) {
  }

  ngOnInit(): void {
    this.initializeSelectedItems();
  }

  initializeSelectedItems(): void {
    this.selectedItems = this.itemService.getSelectedItems(this.items);
  }

  toggleSelected(index: number, item: ItemDto): void {
    if (!this.selectedItems) {
      return;
    }

    const isItemAlreadySelected: boolean = this.itemService.isItemAlreadySelected(item);

    if (isItemAlreadySelected) {
      this.selectedItems[index] = undefined;
      this.itemService.removeItem(item);

      return;
    }

    this.selectedItems[index] = item;
    this.itemService.setItem(item);
  }

}
