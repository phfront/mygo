import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, take } from 'rxjs/operators';
import { YPDCardList, YPDCardListImage } from '../../interfaces/ygoprodeck';
import { YgoprodeckService } from '../../services/ygoprodeck.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css'],
})
export class CardSearchComponent implements OnInit {
  @Input() moveattribute: string;
  @ViewChild('container') container: ElementRef;
  @Output() cardClick = new EventEmitter();
  @Output() cardHover = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  cardList: YPDCardList[] = [];

  displayMode: 'list' | 'grid' = 'list';
  search = new FormControl('Mago Negro');
  sortBy = new FormControl('name');

  constructor(private ygoprodeckService: YgoprodeckService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.getCards();
    });
    this.sortBy.valueChanges.subscribe(() => {
      this.sortCards();
    });
    this.getCards();
  }

  getCards() {
    this.ygoprodeckService
      .fname(this.search.value)
      .pipe(take(1))
      .subscribe((response: { data: YPDCardList[] }) => {
        this.cardList = response.data;
        this.searchEvent.emit(response.data);
        this.sortCards();
      });
  }

  sortCards() {
    const property = this.sortBy.value.replace('-', '');
    if (this.sortBy.value.includes('-')) {
      this.cardList.sort((a, b) => b[property].localeCompare(a[property]));
    } else {
      this.cardList.sort((a, b) =>
        a[property].toString().localeCompare(b[property])
      );
    }
  }

  getStyle() {
    if (this.container) {
      return {
        height: `${this.container.nativeElement.offsetHeight - 80}px`,
      };
    } else {
      return {
        display: 'none',
      };
    }
  }

  handleClick(card: YPDCardList, variation: YPDCardListImage) {
    if (variation) {
      this.ygoprodeckService
        .id(variation.id)
        .pipe(take(1))
        .subscribe((response: { data: YPDCardList[] }) => {
          console.log(response);
          if (response.data.length) {
            this.cardClick.emit(response.data[0]);
          }
        });
      // const newCard: YPDCardList = JSON.parse(JSON.stringify(card));
      // newCard.card_images = newCard.card_images.filter(
      //   (image) => image.id === variation.id
      // );
      // newCard.id = variation.id;
      // this.cardClick.emit(newCard);
    } else {
      this.cardClick.emit(card);
    }
  }

  enterImageVariation(card: YPDCardList, variation: YPDCardListImage) {
    const newCard: YPDCardList = JSON.parse(JSON.stringify(card));
    newCard.card_images = newCard.card_images.filter(
      (image) => image.id === variation.id
    );
    this.cardHover.emit(newCard);
  }
}
