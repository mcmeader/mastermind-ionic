import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FinishScreenComponent } from '../finish-screen/finish-screen.component';
import { GameScreenComponent } from '../game-screen/page/game-screen.component';
import { TitleScreenComponent } from '../title-screen/page/title-screen.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [FinishScreenComponent,GameScreenComponent,TitleScreenComponent],
})
export class PagesModule {
}
