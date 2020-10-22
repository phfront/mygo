import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YgoprodeckService } from '../shared/services/ygoprodeck.service';
import { YPDCardList } from '../shared/interfaces/ygoprodeck';
import { DeckService } from '../shared/services/deck.service';
import * as CARD_MOVE from '../../assets/js/cardMove.js';
import { MygoService } from '../shared/services/mygo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IMygoDeck } from '../shared/interfaces/mygoapi';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  @ViewChild('inputImportDeck') inputImportDeck: ElementRef;
  modalSearch: boolean = false;
  deck: IMygoDeck;
  cardPreview: YPDCardList;
  areaMoveAttribute: string = 'card-move-area';
  moveHandler = CARD_MOVE.create(this.areaMoveAttribute);

  constructor(
    private ygoprodeckService: YgoprodeckService,
    private deckService: DeckService,
    private mygoService: MygoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params.deckId) {
        this.getDeck(params.deckId);
      } else {
        this.router.navigate(['/user/login']);
      }
    });
  }

  getDeck(deckId) {
    this.mygoService
      .deck(deckId)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.deck = response.deck;
        this.initMove();
      });
  }

  importDeck() {
    this.inputImportDeck.nativeElement.click();
  }

  handleInputDeck(files: FileList) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      // this.decks.push(
      //   this.deckService.ydk2Deck(
      //     files[0].name.replace('.ydk', ''),
      //     (fileReader.result as String).split('\n')
      //   )
      // );
      // this.activeDeck = this.decks[0];
    };
    fileReader.readAsText(files[0]);
  }

  initMove() {
    setTimeout(() => {
      this.moveHandler.initCardMove(this.moveHandler);
    }, 1000);
  }

  searchEvent(list: YPDCardList[]) {
    this.initMove();
  }
}
