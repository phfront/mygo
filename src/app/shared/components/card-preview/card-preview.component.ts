import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { YPDCardList, YPDCardListImage } from '../../interfaces/ygoprodeck';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css'],
})
export class CardPreviewComponent implements OnInit, OnChanges {
  @Input() card: YPDCardList;
  bigImage: string;

  constructor() {}

  ngOnInit(): void {
    if (this.card) {
      if (this.card.card_images.length) {
        this.bigImage = this.card.card_images[0].image_url;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.card) {
      if (changes.card.currentValue) {
        const _card = changes.card.currentValue as YPDCardList;
        this.bigImage = _card.card_images[0].image_url;
      }
    }
  }

  setBigImage(img: YPDCardListImage) {
    this.bigImage = img.image_url;
  }
}
