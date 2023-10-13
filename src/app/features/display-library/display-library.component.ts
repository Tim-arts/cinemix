import { Component, OnInit } from '@angular/core';
import { ItemDto } from '../../core/interfaces/item';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-display-library',
  templateUrl: './display-library.component.html',
  styleUrls: ['./display-library.component.scss']
})
export class DisplayLibraryComponent implements OnInit {

  private readonly maxItemsPerRow: number = 10;

  items!: ItemDto[] | undefined;
  placeholderItems!: ItemDto[];

  constructor(private readonly itemService: ItemService) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.placeholderItems = new Array(this.maxItemsPerRow - this.items.length);
  }

}
