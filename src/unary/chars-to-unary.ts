/**
 * Write a function that takes a string as input
 * and outputs the string in unary code
 *
 * Rules:
 * - The input message consists of ASCII characters (7-bit)
 * - The unary output message consists of blocks of 0
 * - A block is separated from another block by a space
 * - Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
 *   - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
 *   - Second block: the number of 0 in this block is the number of bits in the series
 *
 * Examples:
 *
 *   - C
 *     charCode('C') = 67
 *     binary(67) = '1000011'
 *     0 0 (the first series consists of only a single 1)
 *     00 0000 (the second series consists of four 0)
 *     0 00 (the third consists of two 1)
 *     So, toUnary('C') = '0 0 00 0000 0 00'
 *
 *   - CC
 *     10000111000011
 *     0 0 (one single 1)
 *     00 0000 (four 0)
 *     0 000 (three 1)
 *     00 0000 (four 0)
 *     0 00 (two 1)
 *     So, toUnary('CC') = '0 0 00 0000 0 000 00 0000 0 00'
 *
 * Notes:
 *   - All binary values must be 7-bit
 *     E.g. '1000' !== '0001000'
 *   - A block in a character might spill onto the next one:
 *     E.g. '1000011' + '1000011' = '10000111000011'
 *                ^^     ^                ^^^
 *   - To get a string's character code use String.prototype.charCodeAt(index)
 *     E.g. 'abc'.charCodeAt(0) = 97
 *   - To convert a number to binary use Number.prototype.toString([radix])
 *     E.g. (16).toString(2) = '10000'
 *
 */

const charTo7BitString = (c: string) => {
  return c.charCodeAt(0).toString(2).padStart(7, '0');
};

export const toUnary = (chars: string) => {
  const binaryStrings = [...chars].map(charTo7BitString);
  const binary = binaryStrings.join('');

  const re = /(0+)|(1+)/g;
  const matches = binary.matchAll(re);
  const groups = [...matches].map((m) => m[0]);

  const unaryGroups = groups.map((binary) => {
    const digit = binary.charAt(0);
    const length = binary.length;

    const digitIndicator = digit === '1' ? '0' : '00';
    const quantityIndicator = ''.padStart(length, '0');

    return `${digitIndicator} ${quantityIndicator}`;
  });
  const unaryString = unaryGroups.join(' ');

  return unaryString;
};
