import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {take,tap} from 'rxjs/operators';
import { CHALLENGE } from 'src/app/constants';
import { DIFFICULTY_PEG_COLORS } from 'src/app/constants/difficulty-peg-colors.constant';
import { Difficulties, GuessPegColor } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameDifficulty$ = new BehaviorSubject(Difficulties.normal);

  private solution: Array<any>;

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
            if (indexWhiteGuess !== -1) {
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
    this.gameDifficulty$.pipe(take(1),tap((difficulty)=>{
        const challenge = CHALLENGE[difficulty];
        const difficultyColors = DIFFICULTY_PEG_COLORS[difficulty];
        const solutionPegs= new Array(challenge.numberOfPegs).fill('');
        //TODO: Replace with random.org mapping
        return solutionPegs.map(() => difficultyColors[Math.floor(Math.random() * challenge.numberOfPegs)]);
    })).subscribe((result) => {
        //TODO: Fixup typing here with peg enums
        this.solution = result as any;
    });
}
}
