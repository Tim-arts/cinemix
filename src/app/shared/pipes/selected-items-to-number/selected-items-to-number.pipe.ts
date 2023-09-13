import { Pipe, PipeTransform } from '@angular/core';
import { ItemDto } from '../../../core/interfaces/movie';

@Pipe({
  name: 'selectedItemsToNumber',
  pure: false,
})
export class SelectedItemsToNumberPipe implements PipeTransform {

  transform(selectedItems: Array<ItemDto | undefined>): number {
    return selectedItems.filter((x: ItemDto | undefined) => x).length;
  }

}
