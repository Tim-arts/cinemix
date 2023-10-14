import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemDto } from '../../core/interfaces/item';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-generate-item',
  templateUrl: './generate-item.component.html',
  styleUrls: ['./generate-item.component.scss']
})
export class GenerateItemComponent {

  private readonly cardAnimation: string = 'card-animation';
  private readonly cardRevealClass: string = 'card-reveal';
  private readonly invisibleClass: string = 'invisible';
  private readonly revealCardTimer: number = 1000;

  @ViewChild('revealCard') revealCard!: ElementRef;

  constructor(private readonly itemService: ItemService) {
  }

  generate(): void {
    const generatedItem: ItemDto = this.itemService.getRandomItem();

    const revealCardElement = this.revealCard.nativeElement;
    const imageElement = revealCardElement.querySelector('img');
    const questionMarkElement = revealCardElement.querySelector('.question-mark');

    const timer: number = setTimeout((): void => {
      revealCardElement.classList.add(this.cardRevealClass);
      clearTimeout(timer);
    }, this.revealCardTimer);

    imageElement.src = generatedItem.Poster;
    revealCardElement.classList.add(this.cardAnimation);
    questionMarkElement.classList.add(this.invisibleClass);

    this.itemService.removeItem(generatedItem);
  }

}
