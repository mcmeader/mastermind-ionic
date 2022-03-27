import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CHALLENGE, ChallengeInfo } from 'src/app/constants';
import { Difficulties, GuessPegColor, PegColors } from 'src/app/enums';
import { GameService } from 'src/app/services/game/game.service';

type RoundData = {
  round: number;
  answers: GuessPegColor[];
  guesses: PegColors[];
};

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  private difficulty: ChallengeInfo;
  private solutionHidden = true;
  private currentIndex = 0;
  private currentRound = 0;
  private selectedIndex: number;
  private selectedPegs: PegColors[];
  private roundData: RoundData[];
  private showWinMessage: boolean;
  private showLoseMessage: boolean;

  // "Congratulations!",
  //             `You solved the puzzle in ${currentRound + 1} rounds!`,
  //             [
  //                 {
  //                     text: "Ok",
  //                     onPress: () => console.log("Cancel Pressed"),
  //                     style: "cancel"
  //                 }
  //             ],

  //             "Better Luck Next Time!",
  //             `You failed to solve the puzzle in the alloted ${currentRound + 1} rounds!`,
  //             [
  //                 {
  //                     text: "Ok",
  //                     onPress: () => console.log("Cancel Pressed"),
  //                     style: "cancel"
  //                 }
  //             ],

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.gameService.gameDifficulty$
      .pipe(takeUntil(this.destroy$))
      .subscribe((difficulty: Difficulties) => {
        this.difficulty = CHALLENGE[difficulty];

        this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
          GuessPegColor.empty
        );
        this.roundData = [
          {
            round: 1,
            answers: new Array(this.difficulty.numberOfPegs).fill(
              GuessPegColor.empty
            ),
            guesses: new Array(this.difficulty.numberOfPegs).fill(
              GuessPegColor.empty
            ),
          },
        ];
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectColor(color, index) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
      if (this.currentIndex < this.difficulty.numberOfPegs) {
        const newPegs = [...this.selectedPegs];
        newPegs[this.currentIndex] = color;
        this.selectedPegs = newPegs;
        const oldRoundData = [...this.roundData];
        oldRoundData.pop();
        const newRoundData = this.roundData[this.currentRound];
        newRoundData.guesses = newPegs;
        this.roundData = [...oldRoundData, newRoundData];
        this.currentIndex = this.currentIndex + 1;
      }
    } else {
      this.selectedIndex = index;
    }
  }

  public resetGuess() {
    this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
      GuessPegColor.empty
    );
    this.currentIndex = 0;
    this.selectedIndex = null;
    const oldRoundData = [...this.roundData];
    oldRoundData.pop();
    const newRoundData = this.roundData[this.currentRound];
    newRoundData.guesses = new Array(this.difficulty.numberOfPegs).fill(
      GuessPegColor.empty
    );
    this.roundData = [...oldRoundData, newRoundData];
  }

  public submitGuess() {
    const checkedGuess = this.gameService.checkGuess(this.selectedPegs);
    if (
      checkedGuess.indexOf(GuessPegColor.white) === -1 &&
      checkedGuess.indexOf(GuessPegColor.empty) === -1
    ) {
      this.solutionHidden = false;
      const currentRoundData = this.roundData[this.currentRound];
      currentRoundData.answers = checkedGuess;
      //Create Win Alert
    } else {
      if (this.difficulty.maxGuesses === this.currentRound + 1) {
        this.solutionHidden = false;
        const currentRoundData = this.roundData[this.currentRound];
        currentRoundData.answers = checkedGuess;
        //Create Lose Alert
      } else {
        const currentRoundData = this.roundData[this.currentRound];
        currentRoundData.answers = checkedGuess;
        this.roundData = [
          ...this.roundData,
          {
            round: this.currentRound + 2,
            answers: new Array(this.difficulty.numberOfPegs).fill(
              GuessPegColor.empty
            ),
            guesses: new Array(this.difficulty.numberOfPegs).fill(
              GuessPegColor.empty
            ),
          },
        ];
        this.currentRound = this.currentRound + 1;
        this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
          GuessPegColor.empty
        );
        this.currentIndex = 0;
        this.selectedIndex = null;
      }
    }
  }

  public goBack() {
    this.router.navigate(['title-screen']);
  }
}
