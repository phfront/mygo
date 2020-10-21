import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMygoCard } from '../interfaces/mygoapi';

@Injectable({
  providedIn: 'root',
})
export class MygoService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.mygoApi}user/authenticate`, {
      username,
      password,
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.http.get(`${environment.mygoApi}user/verifyToken`);
  }

  register(name: string, email: string, username: string, password: string) {
    return this.http.post(`${environment.mygoApi}user/register`, {
      name,
      email,
      username,
      password,
    });
  }

  forgotPassword(email: string) {
    return this.http.post(`${environment.mygoApi}user/forgotpassword`, {
      email,
    });
  }

  changePassword(hash: string, password: string, confirmPassword: string) {
    return this.http.post(`${environment.mygoApi}user/changepassword`, {
      hash,
      password,
      confirmPassword,
    });
  }

  myDecks() {
    return this.http.get(`${environment.mygoApi}user/deck`);
  }

  deck(deckId: string) {
    return this.http.get(`${environment.mygoApi}deck/${deckId}`);
  }

  user() {
    return this.http.get(`${environment.mygoApi}user/info`);
  }

  myCards() {
    return this.http.get(`${environment.mygoApi}user/mycards`);
  }

  updateMyCards(cards: IMygoCard[]) {
    return this.http.put(`${environment.mygoApi}user/mycards`, { cards });
  }

  setTheme(theme: string) {
    return this.http.put(`${environment.mygoApi}user/theme`, { theme });
  }

  getTheme() {
    return this.http.get(`${environment.mygoApi}user/mycards`);
  }
}
