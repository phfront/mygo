import { NgModule } from '@angular/core';

import { MyCardsRoutingModule } from './my-cards-routing.module';
import { MyCardsComponent } from './my-cards.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MyCardsComponent],
  imports: [SharedModule, MyCardsRoutingModule],
})
export class MyCardsModule {}
