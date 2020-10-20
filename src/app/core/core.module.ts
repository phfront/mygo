import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [AuthGuardService],
})
export class CoreModule {}
