import { PegColors } from '../enums/peg-color.enum';

export const EASYPEGCOLORS = {
  red: PegColors.red,
  yellow: PegColors.yellow,
  blue: PegColors.blue,
  green: PegColors.green,
};

export const NORMALPEGCOLORS = {
  ...EASYPEGCOLORS,
  black: PegColors.black,
  white: PegColors.white,
};

export const HARDPEGCOLORS = {
  ...NORMALPEGCOLORS,
  purple: PegColors.purple,
  orange: PegColors.orange,
};

export const NIGHTMAREPEGCOLORS = {
  ...HARDPEGCOLORS,
  grey: PegColors.darkslategrey,
  brown: PegColors.brown,
};

export const IMPOSSIBLEPEGCOLORS = {
  ...NIGHTMAREPEGCOLORS,
  gold: PegColors.gold,
  silver: PegColors.silver,
};
