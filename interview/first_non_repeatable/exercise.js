import assert from 'node:assert/strict';

// Найти первый не повторяющийся символ. Можно использовать любые структуры данных в JS. 
// Желательно O(n) 
function firstNonRepeatingChar(string) {
    
}

// Все разные
assert.equal(firstNonRepeatingChar('abcde'), 'a');
// После нескольких
assert.equal(firstNonRepeatingChar('aabbccdef'), 'd');
// Нэту
assert.equal(firstNonRepeatingChar('aabbcc'), 0);

console.log('Прошло с кайфом!');
