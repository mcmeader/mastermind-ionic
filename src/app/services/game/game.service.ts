import { Injectable } from '@angular/core';
import { Difficulties, GuessPegColor } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private solution;
  private gameDifficulty;

  public getDifficulties(){
    return [Difficulties.easy, Difficulties.normal, Difficulties.hard, Difficulties.nightmare, Difficulties.impossible];
  }

  public checkGuess(guess){
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
            whiteGuess[index] = '-';
        }
    });

    checkedGuess.forEach((data, index) => {
        if (data !== '-') {
            const indexWhiteGuess = whiteGuess.indexOf(data);
            if (indexWhiteGuess != -1) {
                checkedPegs[index] = GuessPegColor.white;
                whiteGuess[indexWhiteGuess] = '-';
            }
        }
    });

    if (checkedPegs.some(value => value === GuessPegColor.empty) || checkedPegs.some(value => value === GuessPegColor.white)) {
        checkedPegs.sort();
        return checkedPegs;
    } else {
        return new Array(guess.length).fill(GuessPegColor.black);
    }
}

  public generateSolution() {
    const pegs = new Array(this.gameDifficulty.numberOfPegs).fill('');
    this.solution = pegs.map(() => this.gameDifficulty.colors[Math.floor(Math.random() * this.gameDifficulty.colors.length)]);
  }
}
