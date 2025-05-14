import assert from 'node:assert/strict';

// Задача: Написать алгоритм быстрой сортировки
// Идея: найти опорный элемент, найти элементы меньше опорного и больше, применить алгоритм к ним
function quickSort(arr) {
    
}

// Небольшой произвольный массив
assert.deepStrictEqual(quickSort([3, 1, 2, 5, 7]), [1, 2, 3, 5, 7]);
// Пустой массив
assert.deepStrictEqual(quickSort([]), []);
// С отрицательными числами
assert.deepStrictEqual(quickSort([1, -2, 3, 4, -11]), [-11, -2, 1, 3, 4]);
// Не только целые
assert.deepStrictEqual(quickSort([0, 1.76, 1.11, -2.1, 33, 1020]), [-2.1, 0, 1.11, 1.76, 33, 1020]);

console.log('Прошло!');