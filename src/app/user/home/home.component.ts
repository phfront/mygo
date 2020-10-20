import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IMygoDeck, IMygoUser } from 'src/app/shared/interfaces/mygoapi';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: IMygoUser;
  decks: IMygoDeck[] = [];

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.mygoService
      .user()
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          this.user = response.user;
          this.getDecks();
        },
        (response: any) => {
          alert(response.error.errors.join('|'));
          this.mygoService.logout();
          this.router.navigate(['/user/login']);
        }
      );
  }

  getDecks() {
    this.mygoService
      .myDecks()
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          this.decks = response.decks;
        },
        (response: any) => {
          alert(response.error.errors.join('|'));
        }
      );
  }

  editDeck(deck: IMygoDeck) {
    this.router.navigate([`/deck/${deck._id}`]);
  }

  myCards() {
    this.router.navigate([`/mycards`]);
  }
}
