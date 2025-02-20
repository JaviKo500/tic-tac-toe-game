export const WINS_COMBINATION = [
  ['(0,0)','(0,1)','(0,2)'],
  ['(1,0)','(1,1)','(1,2)'],
  ['(2,0)','(2,1)','(2,2)'],

  ['(0,0)', '(1,0)', '(2,0)'],
  ['(0,1)', '(1,1)', '(2,1)'],
  ['(0,2)', '(1,2)', '(2,2)'],

  ['(0,0)', '(1,1)', '(2,2)'],
  ['(0,2)', '(1,1)', '(2,0)']
];

export const checkWinCombination = (selectedOptions: string[]) => {
  if (selectedOptions.length < 3) return false;
  for (const combination of WINS_COMBINATION) {
    const winsPoints = selectedOptions.filter((point) => combination.includes(point));
    if (winsPoints.length === 3) {
      return true;
    }
  }
  return false;
};