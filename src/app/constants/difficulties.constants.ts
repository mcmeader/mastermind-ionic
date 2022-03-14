import { Difficulties, EasyDifficultyPegColor, NormalDifficultyPegColor,
    HardDifficultyPegColor, NightmareDifficultyPegColor, ImpossibleDifficultyPegColor } from '../enums';

export const CHALLENGE = {
   [Difficulties.easy]:{
        numberOfPegs: 3,
        colors: EasyDifficultyPegColor,
        maxGuesses: 0,
    },
    [ Difficulties.normal]: {
        numberOfPegs: 4,
        colors: NormalDifficultyPegColor,
        maxGuesses: 10,
    },
    [ Difficulties.hard]:{
        numberOfPegs: 5,
        colors: HardDifficultyPegColor,
        maxGuesses: 12,
    },
    [Difficulties.nightmare]:{
        numberOfPegs: 6,
        colors: NightmareDifficultyPegColor,
        maxGuesses: 10,
    },
    [ Difficulties.impossible]:{
        numberOfPegs: 8,
        colors: ImpossibleDifficultyPegColor,
        maxGuesses: 8,
    }
};
