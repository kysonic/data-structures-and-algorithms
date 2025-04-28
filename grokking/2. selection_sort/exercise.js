import assert from 'node:assert/strict';

function selectionSort(arr) {}

// Небольшой произвольный массив
assert.deepStrictEqual(selectionSort([3, 1, 2, 5, 7]), [1, 2, 3, 5, 7]);
// Пустой массив
assert.deepStrictEqual(selectionSort([]), []);
// С отрицательными числами
assert.deepStrictEqual(selectionSort([1, -2, 3, 4, -11]), [-11, -2, 1, 3, 4]);
// Не только целые
assert.deepStrictEqual(selectionSort([0, 1.76, 1.11, -2.1, 33, 1020]), [-2.1, 0, 1.11, 1.76, 33, 1020]);
