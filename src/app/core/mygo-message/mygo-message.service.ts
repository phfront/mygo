import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MygoMessageService {
  dirty: boolean = false;
  show: boolean = false;
  messageType: 'info' | 'success' | 'warning' | 'error';
  message: string;

  constructor() {}

  showMessage(
    type: 'info' | 'success' | 'warning' | 'error',
    message: string,
    time: number = 3000
  ) {
    this.dirty = true;
    this.show = true;
    this.messageType = type;
    this.message = message;
    setTimeout(() => {
      this.show = false;
    }, time);
  }
}
