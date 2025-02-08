export interface PlayerInterface {
  id:string;
  games: number;
  wins: number;
  losses: number;
  nickname:string;
  points:number;
  gender?:string;
  colorClass?:string;
}