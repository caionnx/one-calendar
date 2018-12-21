/*
  https://www.npmjs.com/package/calendar-matrix
  https://jsperf.com/calendar-matrix-lodash-vs-native
*/

const rows = Array(6);
const cols = Array(7);

const getMatrix = (y, m) => {
  const matrix = [];
  const date = new Date(y, m);
  const numDays = new Date(y, m + 1, 0).getDate();
  let dayNum;

  for (let row = 0; row < rows.length; row++) {
    const week = [];

    for (let col = 0; col < cols.length; col++) {
      if (row === 0) {
        dayNum = col - date.getDay() + 1;
        week.push(
          col < date.getDay()
          ? -(new Date(y, m, -(date.getDay() - 1 - col)).getDate())
          : dayNum
        );
      } else {
        dayNum = matrix[matrix.length - 1][6] + col + 1;
        week.push(dayNum <= numDays ? dayNum : -(dayNum - numDays));
      }
    }

    if (!row || week[0] > 1) matrix.push(week);
  }

  return matrix;
}

export default (year, month) => {
  if (typeof year === 'undefined') year = new Date();

  if (year instanceof Date) {
    return getMatrix(year.getFullYear(), year.getMonth());
  }

  return getMatrix(year, month);
}
