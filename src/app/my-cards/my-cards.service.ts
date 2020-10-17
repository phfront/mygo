import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { YPDCardList } from '../shared/interfaces/ygoprodeck';

@Injectable({
  providedIn: 'root',
})
export class MyCardsService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get('https://api.jsonbin.io/b/5f8b50e065b18913fc6050f6', {
      headers: {
        'secret-key': environment.jsonBinKey,
      },
    });
  }

  update(cardList: YPDCardList[]) {
    return this.http.put(
      'https://api.jsonbin.io/b/5f8b50e065b18913fc6050f6',
      {
        myCards: cardList,
      },
      {
        headers: {
          'secret-key': environment.jsonBinKey,
          versioning: 'false',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
