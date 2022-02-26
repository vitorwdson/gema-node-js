/**
 * Write a function that takes a string in unary code as input
 * and outputs the decoded string
 *
 * Rules:
 * - The input message consists of blocks of 0
 * - The toChars output message consists of ASCII characters (7-bit)
 * - A block is separated from another block by a space
 * - Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
 *   - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
 *   - Second block: the number of 0 in this block is the number of bits in the series
 *
 * Examples:
 *
 *   0 0 00 0000 0 00
 *   0 0 (the first series consists of only a single 1)
 *   00 0000 (the second series consists of four 0)
 *   0 00 (the third consists of two 1)
 *   a single 1 + four 0 + two 1 = '1000011'
 *   decimal('1000011') = 67
 *   String.fromCharCode(67) = 'C'
 *   toChars('0 0 00 0000 0 00') = 'C'
 *
 *   0 0 00 0000 0 000 00 0000 0 00
 *   0 0 (one single 1)
 *   00 0000 (four 0)
 *   0 000 (three 1)
 *   00 0000 (four 0)
 *   0 00 (two 1)
 *   '10000111000011'
 *   7-bit split: '10000111000011' = '1000011' + '1000011'
 *   decimal('1000011') = 67
 *   String.fromCharCode(67) = 'C'
 *   toChars('0 0 00 0000 0 000 00 0000 0 00') = 'CC'
 *
 * Notes:
 *   - To convert a binary string to a decimal number use parseInt(string [, radix])
 *     E.g. parseInt('1000011', 2) = 67
 *   - To convert from a char code to a char use String.fromCharCode(num1[, ...[, numN]])
 *     E.g. String.fromCharCode(67) = 'C'
 */

export const toChars = (unary: string) => {
  console.log();
};
