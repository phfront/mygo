import { Component, Input, OnInit } from '@angular/core';
import { YPDCardList } from 'src/app/shared/interfaces/ygoprodeck';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() card: YPDCardList;

  constructor() {}

  ngOnInit(): void {}
}
