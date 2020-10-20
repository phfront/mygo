import { NgModule } from '@angular/core';

import { MyCardsRoutingModule } from './my-cards-routing.module';
import { MyCardsComponent } from './my-cards.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MyCardsComponent, CardComponent],
  imports: [SharedModule, MyCardsRoutingModule],
  providers: [],
})
export class MyCardsModule {}
