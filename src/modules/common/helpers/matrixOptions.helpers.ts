import type { BoxOptionItem } from "@/modules/game/interfaces/game.interface";

export const createMatrixOption = ( quantity: number ) => {
  const matrixOptions: BoxOptionItem [][] = [];
  for (let i = 0; i < quantity; i++) {
    matrixOptions.push([]);
    for (let j = 0; j < quantity; j++) {
      matrixOptions[i].push({
        x: i,
        y: j,
      });
    }
  }
  return matrixOptions;
}