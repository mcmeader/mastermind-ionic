import { AnswerPegColor } from "../enums";
import { PegColors } from "../enums/peg-color.enum";

export type AnswerColors = {
   [AnswerPegColor.empty]: string,
   [AnswerPegColor.black]: string,
   [AnswerPegColor.white]: string,
}

export const StandardAnswerColors: AnswerColors = {
   [AnswerPegColor.empty]: '',
   [AnswerPegColor.black]: 'black',
   [AnswerPegColor.white]: 'white'
}
