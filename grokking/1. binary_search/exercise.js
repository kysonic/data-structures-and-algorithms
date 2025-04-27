import assert from 'node:assert/strict';


function binarySearch(arr, elem) {
   
}

// Элемент в середине массива
assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4), 3);
console.log('Элемент в середине массива - OK');
// Элемент в начале массива
assert.equal(binarySearch([1, 2, 3, 4, 5], 1), 0);
console.log('Элемент в начале массива - OK');
// Элемент в конце массива
assert.equal(binarySearch([1, 2, 3, 4, 5], 5), 4);
console.log('Элемент в конце массива - OK');
// Элемент отсутствует в непустом массиве
assert.equal(binarySearch([1, 3, 5, 7], 4), -1);
console.log('Элемент отсутствует в непустом массиве - OK');
// Пустой массив
assert.equal(binarySearch([], 42), -1);
console.log('Пустой массив - OK');
// Массив из одного элемента (элемент найден)
assert.equal(binarySearch([6], 6), 0);
console.log('Массив из одного элемента (элемент найден) - OK');

console.log('Все тесты пройдены!');
