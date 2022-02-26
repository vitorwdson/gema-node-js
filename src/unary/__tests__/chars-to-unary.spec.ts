import { toUnary } from '../chars-to-unary';

const table = [
  ['C', '0 0 00 0000 0 00'],
  ['CC', '0 0 00 0000 0 000 00 0000 0 00'],
  ['ABC', '0 0 00 00000 0 00 00 0000 0 0 00 0 0 0 00 0000 0 00'],
  [' ', '00 0 0 0 00 00000'],
  ['\n', '00 000 0 0 00 0 0 0 00 0'],
  ['Unary', '0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0 0 000 00 0 0 00 00 0000 0 0000 00 00 0 0 00 0 0 0000 00 00 0 0']
];

it.each(table)("unary of '%p' should be '%p'", (string, unary) => {
  expect(toUnary(string)).toBe(unary);
});
