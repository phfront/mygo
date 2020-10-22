import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { MygoLoadingComponent } from './mygo-loading/mygo-loading.component';
import { MygoLoadingService } from './mygo-loading/mygo-loading.service';
import { MygoMessageComponent } from './mygo-message/mygo-message.component';
import { MygoMessageService } from './mygo-message/mygo-message.service';

@NgModule({
  declarations: [HeaderComponent, MygoLoadingComponent, MygoMessageComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, MygoLoadingComponent, MygoMessageComponent],
  providers: [AuthGuardService, MygoLoadingService, MygoMessageService],
})
export class CoreModule {}
