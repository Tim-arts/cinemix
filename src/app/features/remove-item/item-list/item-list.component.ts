import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../core/interfaces/movie';
import { RemoveItemService } from '../../../core/services/remove-item/remove-item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Movie[] = [];

  constructor(private removeItemService: RemoveItemService) {}

  ngOnInit() {

  }

  removeItem(item: Movie) {
    this.removeItemService.removeItem(item.id);
  }

}
