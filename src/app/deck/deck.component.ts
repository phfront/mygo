import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YgoprodeckService } from '../shared/services/ygoprodeck.service';
import { Deck, YPDCardList } from '../shared/interfaces/ygoprodeck';
import { DeckService } from '../shared/services/deck.service';
import * as CARD_MOVE from '../../assets/js/cardMove.js';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  @ViewChild('inputImportDeck') inputImportDeck: ElementRef;
  modalSearch: boolean = false;
  decks: Deck[] = [];
  activeDeck: Deck;
  newDeckName: string = '';
  cardPreview: YPDCardList;
  areaMoveAttribute: string = 'card-move-area';
  moveHandler = CARD_MOVE.create(this.areaMoveAttribute);

  constructor(
    private ygoprodeckService: YgoprodeckService,
    private deckService: DeckService
  ) {}

  ngOnInit(): void {
    const mock = [
      '#created by pedroatem',
      '#main',
      '46986414',
      '46986415',
      '46986416',
      '40737112',
      '71703785',
      '71703785',
      '71703785',
      '35191415',
      '35191415',
      '35191415',
      '30603688',
      '38033125',
      '7084129',
      '7084129',
      '71696014',
      '71696014',
      '1784686',
      '2314238',
      '12580477',
      '49702428',
      '55144522',
      '75500286',
      '82404868',
      '82404868',
      '83764719',
      '98645731',
      '111280',
      '23020408',
      '41735184',
      '59514116',
      '69542930',
      '73616671',
      '75190122',
      '47222536',
      '47222536',
      '68462976',
      '7922915',
      '7922915',
      '9287078',
      '9287078',
      '16964437',
      '32754886',
      '44095762',
      '62279055',
      '81210420',
      '48680970',
      '48680970',
      '48680970',
      '54175023',
      '78625592',
      '86509711',
      '89448140',
      '#extra',
      '41721210',
      '75380687',
      '98502114',
      '50237654',
      '73452089',
      '43892408',
      '39030163',
      '96471335',
      '85551711',
      '!side',
      '38033121',
      '38033123',
      '82627406',
      '7198399',
      '56132807',
      '34318086',
      '20747792',
      '97631303',
      '49941059',
      '47222536',
      '7922915',
      '',
    ];
    this.decks.push(this.deckService.ydk2Deck('Dark Magician', mock));
    this.activeDeck = this.decks[0];
    this.cardPreview = {
      id: 97631303,
      name: 'Almas dos Magos',
      type: 'Effect Monster',
      desc:
        'Você pode enviar até 2 Magias/Armadilhas da sua mão e/ou do campo para o Cemitério; compre esse número de cards. Se este card estiver na sua mão: você pode enviar 1 monstro Mago de Nível 6 ou mais do seu Deck para o Cemitério e, depois, ative 1 desses efeitos;\r\n● Invoque este card por Invocação-Especial.\r\n● Envie este card para o Cemitério e, depois, você pode Invocar por Invocação-Especial 1 "Mago Negro" ou 1 "Pequena Maga Negra" do seu Cemitério.\r\nVocê só pode usar cada efeito de "Almas dos Magos" uma vez por turno.\n',
      atk: 0,
      def: 0,
      level: 1,
      scale: 0,
      race: 'Spellcaster',
      attribute: 'DARK',
      name_en: "Magicians' Souls",
      archetype: 'Dark Magician',
      card_sets: [
        {
          set_name: 'Legendary Duelists: Magical Hero',
          set_code: 'LED6-EN002',
          set_rarity: 'Ultra Rare',
          set_rarity_code: '(UR)',
          set_price: '93.52',
        },
      ],
      card_images: [
        {
          id: 97631303,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
        },
        {
          id: 97631303,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
        },
        {
          id: 97631303,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
        },
        {
          id: 97631303,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
        },
        {
          id: 97631303,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '56.62',
          tcgplayer_price: '89.72',
          ebay_price: '99.99',
          amazon_price: '129.59',
          coolstuffinc_price: '89.99',
        },
      ],
    };
    this.initMove();
  }

  modalCardSelect(card: YPDCardList) {
    console.log(card);
  }

  openModal() {
    this.modalSearch = true;
  }

  setActiveDeck(deck: Deck) {
    this.activeDeck = deck;
  }

  addDeck() {
    this.decks.push({
      name: this.newDeckName,
      createdBy: '',
      main: [],
      extra: [],
      side: [],
    });
    this.newDeckName = '';
  }

  importDeck() {
    this.inputImportDeck.nativeElement.click();
  }

  handleInputDeck(files: FileList) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.decks.push(
        this.deckService.ydk2Deck(
          files[0].name.replace('.ydk', ''),
          (fileReader.result as String).split('\n')
        )
      );
      this.activeDeck = this.decks[0];
    };
    fileReader.readAsText(files[0]);
  }

  initMove() {
    setTimeout(() => {
      this.moveHandler.initCardMove(this.moveHandler);
    }, 100);
  }

  searchEvent(list: YPDCardList[]) {
    this.initMove();
  }
}
