import { Component } from '@angular/core';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-display-library',
  templateUrl: './display-library.component.html',
  styleUrls: ['./display-library.component.scss']
})
export class DisplayLibraryComponent {

  constructor(private readonly itemService: ItemService) {

  }

}
