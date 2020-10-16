import { NgModule } from '@angular/core';

import { DeckRoutingModule } from './deck-routing.module';
import { DeckComponent } from './deck.component';
import { SharedModule } from '../shared/shared.module';
import { ActiveDeckComponent } from './components/active-deck/active-deck.component';

@NgModule({
  declarations: [DeckComponent, ActiveDeckComponent],
  imports: [SharedModule, DeckRoutingModule],
})
export class DeckModule {}
