import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YgoprodeckService } from './services/ygoprodeck.service';
import { CaptureComponent } from './components/capture/capture.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeckService } from './services/deck.service';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { CardListComponent } from './components/card-search/card-list/card-list.component';
import { CardSearchMoveComponent } from './components/card-search-move/card-search-move.component';
import { MygoService } from './services/mygo.service';
import { HttpInterceptorService } from '../core/http-interceptor.service';

@NgModule({
  declarations: [
    CaptureComponent,
    CardSearchComponent,
    CardSearchMoveComponent,
    CardListComponent,
    CardPreviewComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    CaptureComponent,
    CardSearchComponent,
    CardSearchMoveComponent,
    CardPreviewComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    YgoprodeckService,
    DeckService,
    MygoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule {}
