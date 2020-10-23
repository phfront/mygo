import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMygoDeck } from 'src/app/shared/interfaces/mygoapi';
import { Deck, YPDCardList } from 'src/app/shared/interfaces/ygoprodeck';

@Component({
  selector: 'app-active-deck',
  templateUrl: './active-deck.component.html',
  styleUrls: ['./active-deck.component.scss'],
})
export class ActiveDeckComponent implements OnInit {
  @Input() deck: IMygoDeck;
  @Output() cardHover = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getMainCardsInfo(cards: YPDCardList[]) {
    const qtdMonsters = cards.filter((card) => card.type.includes('Monster'))
      .length;
    const qtdSpell = cards.filter(
      (card) => card.type.includes('Spell') || card.type.includes('Skill')
    ).length;
    const qtdTrap = cards.filter((card) => card.type.includes('Trap')).length;
    return `${cards.length} [ Monstros: ${qtdMonsters}, Magia: ${qtdSpell}, Armadilha: ${qtdTrap} ]`;
  }

  getExtraCardsInfo(cards: YPDCardList[]) {
    const qtdFusion = cards.filter((card) => card.type.includes('Fusion'))
      .length;
    const qtdXYZ = cards.filter(
      (card) => card.type.includes('Spell') || card.type.includes('XYZ')
    ).length;
    const qtdSynchro = cards.filter((card) => card.type.includes('Synchro'))
      .length;
    const qtdLink = cards.filter((card) => card.type.includes('Link')).length;
    return `${cards.length} [ Fusão: ${qtdFusion}, XYZ: ${qtdXYZ}, Sincro: ${qtdSynchro}, Link: ${qtdLink} ]`;
  }
}
