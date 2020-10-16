import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YgoprodeckService } from './services/ygoprodeck.service';
import { CaptureComponent } from './components/capture/capture.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeckService } from './services/deck.service';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { CardListComponent } from './components/card-search/card-list/card-list.component';

@NgModule({
  declarations: [
    CaptureComponent,
    CardSearchComponent,
    CardListComponent,
    CardPreviewComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    CaptureComponent,
    CardSearchComponent,
    CardPreviewComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [YgoprodeckService, DeckService],
})
export class SharedModule {}
