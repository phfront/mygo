import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MygoLoadingService {
  show: boolean = false;
  message: string = '';

  constructor() {}

  showLoading(message: string = '') {
    this.show = true;
    this.message = message;
  }

  hideLoading() {
    this.show = false;
    this.message = '';
  }
}
