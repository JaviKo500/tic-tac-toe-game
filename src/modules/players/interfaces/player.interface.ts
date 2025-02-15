export interface PlayerInterface {
  id:string;
  games: number;
  wins: number;
  losses: number;
  nickname:string;
  points:number;
  createdAt:Date;
  gender?:Gender;
  colorClass?:string;
}

export interface PlayerSelectedInterface {
  order: number;
  player: PlayerInterface;
  icon: IconGame;
}

export type IconGame = 'X' | 'O';

export type Gender = 'male' | 'female' | 'other';

export const GENDERS: { gender: Gender, label: string }[] = [
  { gender: 'male', label: 'Male' },
  { gender: 'female', label: 'Female' },
  { gender: 'other', label: 'Other' },
];
