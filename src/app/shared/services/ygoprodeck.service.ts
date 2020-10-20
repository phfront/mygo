import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YgoprodeckService {
  lang: string = 'pt';
  cardsPerSecond = 10;

  constructor(private http: HttpClient) {}

  fname(text: string) {
    return this.http.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${text}&language=pt`
    );
  }

  ids(ids: string[]) {
    return this.http.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${ids.join(
        ','
      )}&language=pt`
    );
  }

  id(id: number) {
    return this.http.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}&language=pt`
    );
  }

  getCardsFromIds(
    cardsIds: number[],
    cb: Function,
    progress: Function = undefined,
    result = []
  ) {
    const ids: number[] = JSON.parse(JSON.stringify(cardsIds));
    if (ids.length) {
      const requests = [];
      ids
        .splice(0, this.cardsPerSecond)
        .forEach((id) => requests.push(this.id(id)));
      forkJoin(requests)
        .pipe(take(1))
        .subscribe((response) => {
          response.forEach((card: { data: any }) => {
            if (card.data) {
              result.push(card.data[0]);
            }
          });
          if (progress) {
            progress(result.length);
          }
          setTimeout(() => {
            this.getCardsFromIds(ids, cb, progress, result);
          }, 1000);
        });
    } else {
      cb(result);
    }
  }
}
