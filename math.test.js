const { addition } = require('./math');

test('addition de deux nombres positifs', () => {
  expect(addition(2, 3)).toBe(5);
});

test('addition avec zéro', () => {
  expect(addition(0, 7)).toBe(7);
});

test('addition de deux nombres négatifs', () => {
  expect(addition(-4, -6)).toBe(-10);
});