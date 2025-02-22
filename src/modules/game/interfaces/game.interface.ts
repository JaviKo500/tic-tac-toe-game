import type { PlayerInterface } from "@/modules/players/interfaces/player.interface";

export interface GameInterface {
  winner: PlayerInterface | null;
  status: StatusGame;
}

export enum StatusGame {
  SET_VALUES = 'SET_VALUES',
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
  TIE = 'TIE',
}

export interface BoxOptionItem {
  x: number;
  y: number;
  icon?: string;
  player?: PlayerInterface;
  classBg?: string;
}