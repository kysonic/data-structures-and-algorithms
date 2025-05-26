import assert from 'node:assert/strict';

// Найти первый не повторяющийся символ. Можно использовать любые структуры данных в JS.
// Желательно O(n)
function firstNonRepeatingChar(string) {
    let nonRepeatable = null;
    let repeat = 0;

    for (let i = 1; i < string.length; i++) {
        if (string.charAt(i - 1) === string.charAt(i)) {
            repeat++;
        } else {
            if (!repeat && !nonRepeatable) {
                nonRepeatable = string.charAt(i - 1);
            }

            repeat = 0;
        }
    }

    return nonRepeatable;
}

// Все разные
assert.equal(firstNonRepeatingChar('abcde'), 'a');
// После нескольких
assert.equal(firstNonRepeatingChar('aabbccdef'), 'd');
// Нэту
assert.equal(firstNonRepeatingChar('aabbcc'), null);

console.log('Прошло с кайфом!');
