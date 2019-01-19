import calendarMatrix from './calendarMatrix';

it('return an array of weeks containing days', () => {
  const monthDays = calendarMatrix();
  const firstWeek = monthDays[0];

  expect(monthDays).toHaveLength(6);
  expect(firstWeek).toHaveLength(7);
});

it('return an array of weeks containing days for December 2018', () => {
  const monthDays = calendarMatrix(2018, 11);
  const firstWeek = monthDays[0];
  const firstDay = firstWeek[0];

  expect(monthDays).toHaveLength(6);
  expect(firstWeek).toHaveLength(7);
  expect(firstDay).toBe(-25);
});