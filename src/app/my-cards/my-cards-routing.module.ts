import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCardsComponent } from './my-cards.component';

const routes: Routes = [{ path: '', component: MyCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCardsRoutingModule {}
