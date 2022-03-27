import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TITLE_SCREEN_CONSTANTS } from './constants.constants';
import { GameService } from '../../../services/game/game.service';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss'],
})
export class TitleScreenComponent {
  public readonly constants = TITLE_SCREEN_CONSTANTS;
  public readonly gameDifficulty$ =
    this.gameService.gameDifficulty$.asObservable();

  constructor(private route: Router, private gameService: GameService) {}

  public startGame() {
    this.gameService.generateSolution();
    this.route.navigate(['game-screen']);
  }
}
