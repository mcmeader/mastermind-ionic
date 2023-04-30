import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FinishScreenComponent } from '../finish-screen/finish-screen.component';
import { ColorPegComponent } from '../game-screen/color-peg/color-peg.component';
import { GameRoundRowComponent } from '../game-screen/game-round-row/game-round-row.component';
import { GameScreenComponent } from '../game-screen/page/game-screen.component';
import { PegContainerComponent } from '../game-screen/peg-container/peg-container.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TitleScreenModule } from '../title-screen/title-screen.module';

@NgModule({
  imports: [IonicModule, CommonModule, PagesRoutingModule, TitleScreenModule],
  declarations: [
    FinishScreenComponent,
    GameScreenComponent,
    ColorPegComponent,
    GameRoundRowComponent,
    PegContainerComponent,
  ],
})
export class PagesModule {}
