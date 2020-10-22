import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { IMygoCard } from '../shared/interfaces/mygoapi';
import { MygoService } from '../shared/services/mygo.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css'],
})
export class MyCardsComponent implements OnInit {
  cardPreview: IMygoCard;
  cardSearch = new FormControl('');
  cards: IMygoCard[] = [];
  cardsFiltered: IMygoCard[] = [];

  constructor(private mygoService: MygoService) {}

  ngOnInit(): void {
    this.mygoService
      .myCards()
      .pipe(take(1))
      .subscribe((response: any) => {
        this.cards = response.cards;
        this.filterList();
      });
  }

  removeCard(card: IMygoCard) {
    if (card.count > 0) {
      card.count--;
      this.filterList();
    }
  }

  filterList() {
    if (this.cardSearch.value.replace(/ /g, '')) {
      this.cardsFiltered = this.cards.filter(
        (card) =>
          card.name
            .toLowerCase()
            .includes(this.cardSearch.value.toLowerCase()) && card.count > 0
      );
    } else {
      this.cardsFiltered = this.cards;
    }
  }

  addCard(card: IMygoCard) {
    // const found = this.cardList.find((c) => c.id === card.id);
    // if (found) {
    //   found.count++;
    // } else {
    //   card.count = 1;
    //   this.cardList.push(card);
    //   this.cardList.sort((a, b) => a.name.localeCompare(b.name));
    // }
  }

  saveList() {
    this.mygoService
      .updateMyCards(this.cards)
      .pipe(take(1))
      .subscribe((response: any) => {});
  }
}
