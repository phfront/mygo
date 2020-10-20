import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

export const yugiTheme = {
  bgcolor: '#191a14',
  color1: '#d7c850',
  color2: '#b51051',
};

export const darkMagicianTheme = {
  bgcolor: '#1f2935',
  color1: '#455363',
  color2: '#fff',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUrl: string = '';
  theme: string = 'theme-yugi';

  constructor(private router: Router) {
    this.router.events.subscribe((route: RouterEvent) => {
      if (route.url) {
        this.currentUrl = route.url;
      }
    });
  }

  ngOnInit() {
    this.setTheme(yugiTheme);
  }

  disableHeader() {
    return !(
      this.currentUrl === '/user/login' ||
      this.currentUrl === '/user/register' ||
      this.currentUrl === '/user/forgot-password' ||
      this.currentUrl.includes('/user/change-password/')
    );
  }

  setTheme(theme: {}) {
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
