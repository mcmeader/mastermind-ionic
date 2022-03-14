import { Difficulties } from '../enums/difficulties.enum';
import { EasyDifficultyPegColor, HardDifficultyPegColor, ImpossibleDifficultyPegColor,
    NightmareDifficultyPegColor, NormalDifficultyPegColor } from '../enums/peg-color.enum';

export const DIFFICULTY_PEG_COLORS = {
    [Difficulties.easy]:EasyDifficultyPegColor,
    [Difficulties.normal]:NormalDifficultyPegColor,
    [Difficulties.hard]:HardDifficultyPegColor,
    [Difficulties.impossible]:ImpossibleDifficultyPegColor,
    [Difficulties.nightmare]:NightmareDifficultyPegColor,
};

