import { toChars } from '../unary-to-chars';

const table = [
  ['0 0 00 0000 0 00', 'C'],
  ['0 0 00 0000 0 000 00 0000 0 00', 'CC'],
  ['0 0 00 00000 0 00 00 0000 0 0 00 0 0 0 00 0000 0 00', 'ABC'],
  ['00 0 0 0 00 00000', ' '],
  ['00 000 0 0 00 0 0 0 00 0', '\n'],
  [
    '0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0 0 000 00 0 0 00 00 0000 0 0000 00 00 0 0 00 0 0 0000 00 00 0 0',
    'Unary',
  ],
];

it.each(table)("chars of '%p' should be '%p'", (unary, string) => {
  expect(toChars(unary)).toBe(string);
});
