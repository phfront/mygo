import { Component, OnDestroy, OnInit } from '@angular/core';
import { MygoLoadingService } from './mygo-loading.service';

@Component({
  selector: 'app-mygo-loading',
  templateUrl: './mygo-loading.component.html',
  styleUrls: ['./mygo-loading.component.scss'],
})
export class MygoLoadingComponent implements OnInit, OnDestroy {
  private numOfCards: number = 20;
  private multiplier: number = 10;
  private interval;
  cards = [new Date().getTime()];

  constructor(public mygoLoadingService: MygoLoadingService) {}

  ngOnInit(): void {
    this.prepareCss();
    this.start();
  }

  private prepareCss() {
    const style = document.createElement('style');
    let html = [];
    for (let i = this.numOfCards * this.multiplier; i >= 0; i--) {
      html.push(`
        .loading-card:nth-of-type(${i}) {
          margin-top: -${i}px;
          z-index: ${i};
        }
      `);
    }
    style.innerHTML = html.join('');
    document.head.appendChild(style);
  }

  private start() {
    this.interval = setInterval(() => {
      if (this.cards.length > this.numOfCards * this.multiplier) {
        this.cards = [];
      } else {
        for (let i = 0; i < 10; i++) {
          this.cards.push(new Date().getTime() + i);
        }
      }
    }, 50);
  }

  private stop() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.stop();
  }
}
