import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
  themeList = [];
  currentUrl: string = '';

  constructor(private router: Router, private themeService: ThemeService) {
    this.currentUrl = this.router['location'].path();
    this.router.events.subscribe((route: RouterEvent) => {
      if (route.url) {
        this.currentUrl = route.url;
      }
    });
  }

  ngOnInit(): void {
    for (const key in this.themeService.themeList) {
      this.themeList.push(key);
    }
  }

  setTheme(theme) {
    this.themeService.setTheme(theme);
    if (this.saveTheme()) {
      this.themeService.saveTheme(theme);
    }
  }

  saveTheme() {
    return !(
      this.currentUrl === '/user/login' ||
      this.currentUrl === '/user/register' ||
      this.currentUrl === '/user/forgot-password' ||
      this.currentUrl.includes('/user/change-password/')
    );
  }
}
