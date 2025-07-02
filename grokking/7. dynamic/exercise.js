import assert from 'node:assert/strict';
// Задача: Найти максимальную подстроку входящую в данную используя метод динамического программирования
function lcs(string1, string2) {

}

assert.deepStrictEqual(lcs('hish', 'fish'), { lcs: 3, offset: 1, sequence: 'ish' });
assert.deepStrictEqual(lcs('vista', 'hish'), { lcs: 2, offset: 1, sequence: 'is' });
assert.deepStrictEqual(lcs('google', 'abcdefgooglehijklm'), { lcs: 6, offset: 0, sequence: 'google' });
assert.deepStrictEqual(lcs('0', 0), { lcs: 0, offset: 0, sequence: '' });
