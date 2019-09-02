import {add,mul} from './add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(mul(2, 2)).toBe(4);
});