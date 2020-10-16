import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/deck', pathMatch: 'full' },
  {
    path: 'deck',
    loadChildren: () => import('./deck/deck.module').then((m) => m.DeckModule),
  },
  {
    path: 'my-cards',
    loadChildren: () =>
      import('./my-cards/my-cards.module').then((m) => m.MyCardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
