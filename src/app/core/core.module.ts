import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent],
  providers: [AuthGuardService],
})
export class CoreModule {}
