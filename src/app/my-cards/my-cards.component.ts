import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, take } from 'rxjs/operators';
import { YPDCardList } from '../shared/interfaces/ygoprodeck';
import { MyCardsService } from './my-cards.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css'],
})
export class MyCardsComponent implements OnInit {
  cardPreview: YPDCardList;
  cardList: YPDCardList[] = [];
  cardListFiltered: YPDCardList[] = [];
  cardSearch = new FormControl('');

  constructor(private myCardsService: MyCardsService) {}

  ngOnInit(): void {
    this.myCardsService
      .list()
      .pipe(take(1))
      .subscribe((response: { myCards: YPDCardList[] }) => {
        this.cardList = response.myCards;
        this.cardListFiltered = this.cardList;
      });
    this.cardSearch.valueChanges
      .pipe(debounceTime(100))
      .subscribe(() => this.filterList());
  }

  removeCard(card: YPDCardList) {
    if (card.count > 1) {
      card.count--;
    } else {
      this.cardList = this.cardList.filter((c) => c.id !== card.id);
      this.filterList();
    }
  }

  filterList() {
    if (this.cardSearch.value.replace(/ /g, '')) {
      this.cardListFiltered = this.cardList.filter((card) =>
        card.name.toLowerCase().includes(this.cardSearch.value.toLowerCase())
      );
    } else {
      this.cardListFiltered = this.cardList;
    }
  }

  addCard(card: YPDCardList) {
    const found = this.cardList.find((c) => c.id === card.id);
    if (found) {
      found.count++;
    } else {
      card.count = 1;
      this.cardList.push(card);
      this.cardList.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  saveList() {
    this.myCardsService
      .update(this.cardList)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          alert(response.success ? 'Lista salva' : 'Erro ao salvar lista');
        },
        (error) => alert('Erro ao salvar lista')
      );
  }
}
