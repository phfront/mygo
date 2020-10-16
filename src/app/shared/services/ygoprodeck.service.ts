import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YgoprodeckService {
  lang: string = 'pt';

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
}
