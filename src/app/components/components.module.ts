import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MygoInputComponent } from './mygo-input/mygo-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MygoInputComponent],
  exports: [MygoInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
