import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { yugiTheme } from '../../../assets/themes/yugi/yugi-theme';
import { kaibaTheme } from '../../../assets/themes/kaiba/kaiba-theme';
import { atemTheme } from '../../../assets/themes/atem/atem-theme';
import { MygoService } from '../services/mygo.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSubscribers = new Subject();
  themeList = {
    yugi: yugiTheme,
    kaiba: kaibaTheme,
    atem: atemTheme,
  };

  constructor(private mygoService: MygoService, private router: Router) {}

  setTheme(themeString: string) {
    let theme = this.themeList[themeString];
    if (theme) {
      Object.keys(theme).forEach((k) =>
        document.documentElement.style.setProperty(`--${k}`, theme[k])
      );
      this.themeSubscribers.next(themeString);
      localStorage.setItem('temptheme', themeString);
      // const url = this.router['location'].path();
      // if (
      //   url === '/user/login' ||
      //   url === '/user/register' ||
      //   url === '/user/forgot-password' ||
      //   url.includes('/user/change-password/')
      // ) {
      //   localStorage.setItem('temptheme', themeString);
      // } else {
      //   if (save) {
      //     this.mygoService
      //       .setTheme(themeString)
      //       .pipe(take(1))
      //       .subscribe(
      //         (response: any) => {},
      //         (response: { error: { errors: [] } }) => {
      //           alert(response.error.errors.join(' | '));
      //         }
      //       );
      //   }
      // }
    }
  }

  saveTheme(themeString: string) {
    console.log('salvou tema ', themeString);
    this.mygoService
      .setTheme(themeString)
      .pipe(take(1))
      .subscribe(
        (response: any) => {},
        (response: { error: { errors: [] } }) => {
          alert(response.error.errors.join(' | '));
        }
      );
  }
}
