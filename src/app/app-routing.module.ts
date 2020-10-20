import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'deck/:deckId',
    loadChildren: () => import('./deck/deck.module').then((m) => m.DeckModule),
  },
  {
    path: 'mycards',
    loadChildren: () =>
      import('./my-cards/my-cards.module').then((m) => m.MyCardsModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
