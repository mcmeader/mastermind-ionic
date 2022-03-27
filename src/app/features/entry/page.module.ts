import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FinishScreenComponent } from '../finish-screen/finish-screen.component';
import { ColorPegComponent } from '../game-screen/color-peg/color-peg.component';
import { GameRoundRowComponent } from '../game-screen/game-round-row/game-round-row.component';
import { GameScreenComponent } from '../game-screen/page/game-screen.component';
import { PegContainerComponent } from '../game-screen/peg-container/peg-container.component';
import { TitleScreenComponent } from '../title-screen/page/title-screen.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, PagesRoutingModule],
  declarations: [
    FinishScreenComponent,
    GameScreenComponent,
    TitleScreenComponent,
    ColorPegComponent,
    GameRoundRowComponent,
    PegContainerComponent,
  ],
})
export class PagesModule {}
