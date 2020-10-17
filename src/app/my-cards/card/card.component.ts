import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YPDCardList } from 'src/app/shared/interfaces/ygoprodeck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: YPDCardList;
  @Output() cardHover = new EventEmitter();
  @Output() cardRemove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
