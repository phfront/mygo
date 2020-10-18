import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Deck, YPDCardList } from '../interfaces/ygoprodeck';
import { YgoprodeckService } from './ygoprodeck.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private ygoprodeckService: YgoprodeckService) {}

  ydk2Deck(deckName, ydkFile: Array<string>): Deck {
    const deck: Deck = {
      name: deckName,
      createdBy: '',
      main: [],
      extra: [],
      side: [],
    };

    const mainIds = [];
    const extraIds = [];
    const sideIds = [];

    let section = '';
    ydkFile.forEach((line, i) => {
      if (i === 0) {
        deck.createdBy = line.replace('#created by ', '');
      } else {
        if (
          line.includes('#main') ||
          line.includes('#extra') ||
          line.includes('!side')
        ) {
          section = line;
        } else if (line) {
          if (section.includes('#main')) {
            mainIds.push(Number(line));
          } else if (section.includes('#extra')) {
            extraIds.push(Number(line));
          } else if (section.includes('!side')) {
            sideIds.push(Number(line));
          }
        }
      }
    });

    // DECK PRINCIPAL
    this.ygoprodeckService
      .ids(mainIds)
      .pipe(take(1))
      .subscribe((response: { data: YPDCardList[] }) => {
        mainIds.forEach((cardId) => {
          const responseCard: YPDCardList = response.data.find(
            (r) => r.id === cardId
          );
          if (responseCard) {
            responseCard.card_images.forEach((cardImage) => {
              const card: YPDCardList = JSON.parse(
                JSON.stringify(responseCard)
              );
              card.card_images = [cardImage];
              deck.main.push(card);
            });
          }
        });
      });

    // DECK EXTRA
    this.ygoprodeckService
      .ids(extraIds)
      .pipe(take(1))
      .subscribe((response: { data: YPDCardList[] }) => {
        extraIds.forEach((cardId) => {
          const responseCard: YPDCardList = response.data.find(
            (r) => r.id === cardId
          );
          if (responseCard) {
            responseCard.card_images.forEach((cardImage) => {
              const card: YPDCardList = JSON.parse(
                JSON.stringify(responseCard)
              );
              card.card_images = [cardImage];
              deck.extra.push(card);
            });
          }
        });
      });

    // DECK SIDE
    this.ygoprodeckService
      .ids(sideIds)
      .pipe(take(1))
      .subscribe((response: { data: YPDCardList[] }) => {
        sideIds.forEach((cardId) => {
          const responseCard: YPDCardList = response.data.find(
            (r) => r.id === cardId
          );
          if (responseCard) {
            responseCard.card_images.forEach((cardImage) => {
              const card: YPDCardList = JSON.parse(
                JSON.stringify(responseCard)
              );
              card.card_images = [cardImage];
              deck.side.push(card);
            });
          }
        });
      });

    return deck;
  }
}
