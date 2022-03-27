import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CHALLENGE } from 'src/app/constants';
import { Difficulties, GuessPegColor, PegColors } from 'src/app/enums';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameDifficulty$ = new BehaviorSubject(Difficulties.normal);

  private solution: PegColors[];

  public getDifficulties() {
    return [
      Difficulties.easy,
      Difficulties.normal,
      Difficulties.hard,
      Difficulties.nightmare,
      Difficulties.impossible,
    ];
  }

  public checkGuess(guess) {
    const checkedPegs = new Array(guess.length).fill(GuessPegColor.empty);
    const checkedGuess = [...guess];

    guess.forEach((data, index) => {
      if (data === this.solution[index]) {
        checkedGuess[index] = '-';
        checkedPegs[index] = GuessPegColor.black;
      }
    });

    const whiteGuess = [...this.solution];
    checkedPegs.forEach((data, index) => {
      if (data === GuessPegColor.black) {
        whiteGuess[index] = PegColors.empty;
      }
    });

    checkedGuess.forEach((data, index) => {
      if (data !== '-') {
        const indexWhiteGuess = whiteGuess.indexOf(data);
        if (indexWhiteGuess !== -1) {
          checkedPegs[index] = GuessPegColor.white;
          whiteGuess[indexWhiteGuess] = PegColors.empty;
        }
      }
    });

    if (
      checkedPegs.some((value) => value === GuessPegColor.empty) ||
      checkedPegs.some((value) => value === GuessPegColor.white)
    ) {
      checkedPegs.sort();
      return checkedPegs;
    } else {
      return new Array(guess.length).fill(GuessPegColor.black);
    }
  }

  public generateSolution() {
    this.gameDifficulty$
      .pipe(
        take(1),
        map((difficulty: Difficulties) => {
          const challenge = CHALLENGE[difficulty];
          const difficultyColors = challenge.colors;
          const solutionPegs: PegColors[] = new Array(
            challenge.numberOfPegs
          ).fill(PegColors.empty);
          //TODO: Replace with random.org mapping
          return solutionPegs.map(
            () =>
              difficultyColors[
                Math.floor(Math.random() * challenge.numberOfPegs)
              ]
          );
        })
      )
      .subscribe((result: PegColors[]) => {
        this.solution = result;
      });
  }
}
