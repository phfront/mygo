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
import { YPDCardList } from '../../interfaces/ygoprodeck';
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
  search = new FormControl('mago');
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
}
