import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { take } from 'rxjs/operators';
import { ThemeService } from './shared/service/theme.service';
import { MygoService } from './shared/services/mygo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUrl: string = '';

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private mygoService: MygoService
  ) {
    this.currentUrl = this.router['location'].path();
    this.router.events.subscribe((route: RouterEvent) => {
      if (route.url) {
        this.currentUrl = route.url;
      }
    });
  }

  ngOnInit() {
    const temptheme = localStorage.getItem('temptheme');
    if (temptheme) {
      this.themeService.setTheme(temptheme);
    } else {
      this.themeService.setTheme('yugi');
    }
    if (this.disableHeader()) {
      this.mygoService
        .user()
        .pipe(take(1))
        .subscribe(
          (response: any) => {
            this.themeService.setTheme(response.user.theme);
          },
          (response: any) => {}
        );
    }
  }

  disableHeader() {
    return !(
      this.currentUrl === '/user/login' ||
      this.currentUrl === '/user/register' ||
      this.currentUrl === '/user/forgot-password' ||
      this.currentUrl.includes('/user/change-password/')
    );
  }
}
