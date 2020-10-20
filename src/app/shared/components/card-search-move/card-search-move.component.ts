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
import { forkJoin } from 'rxjs';
import { combineAll, debounceTime, take } from 'rxjs/operators';
import { YPDCardList, YPDCardListImage } from '../../interfaces/ygoprodeck';
import { YgoprodeckService } from '../../services/ygoprodeck.service';

@Component({
  selector: 'app-card-search-move',
  templateUrl: './card-search-move.component.html',
  styleUrls: ['./card-search-move.component.css'],
})
export class CardSearchMoveComponent implements OnInit {
  @Input() moveattribute: string;
  @ViewChild('container') container: ElementRef;
  @Output() cardClick = new EventEmitter();
  @Output() cardHover = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  cardList: YPDCardList[] = [];
  loading: boolean = false;
  loadingText: string = '';
  displayMode: 'list' | 'grid' = 'list';
  search = new FormControl('dragao');
  sortBy = new FormControl('name');

  constructor(private ygoprodeckService: YgoprodeckService) {}

  ngOnInit(): void {
    this.sortBy.valueChanges.subscribe(() => {
      this.sortCards();
    });
  }

  keyUp(event) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      this.getCards();
    }
  }

  getCards() {
    this.loading = true;
    this.loadingText = 'Buscando cartas...';
    this.ygoprodeckService
      .fname(this.search.value)
      .pipe(take(1))
      .subscribe((response: { data: YPDCardList[] }) => {
        this.cardList = [];
        const requests = [];
        response.data.forEach((card) => {
          if (card.card_images.length > 1) {
            card.card_images.forEach((image) => {
              requests.push(this.ygoprodeckService.id(image.id));
            });
          } else {
            this.cardList.push(card);
          }
        });
        if (requests.length) {
          this.loadingText = 'Buscando variações de cartas...';
          this.getVariations(requests, () => {
            this.loading = false;
            this.searchEvent.emit('done');
            this.sortCards();
          });
        } else {
          this.loading = false;
          this.searchEvent.emit('done');
          this.sortCards();
        }
      });
  }

  getVariations(requests, cb) {
    forkJoin(requests.splice(0, 10))
      .pipe(take(1))
      .subscribe((responseVariation: { data: YPDCardList[] }[]) => {
        this.cardList = this.cardList.concat(
          responseVariation.map((r) => r.data[0])
        );
        if (requests.length) {
          setTimeout(() => {
            this.getVariations(requests, cb);
          }, 1000);
        } else {
          cb();
        }
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

  getShadowStyle() {
    if (this.container) {
      return {
        width: `${
          this.container.nativeElement.getBoundingClientRect().width
        }px`,
        height: `${
          this.container.nativeElement.getBoundingClientRect().height
        }px`,
      };
    } else {
      return {
        display: 'none',
      };
    }
  }
}
