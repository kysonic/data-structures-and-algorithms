import assert from 'node:assert/strict';

// Находит минимальный элемент из массива
function findSmallestIndex(arr) {
    let min = Infinity;
    let minIndex = undefined;

    for (let i in arr) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}

function selectionSort(arr) {
    const sorted = [];
    // Пока элементы в текущем массиве есть - работаем
    while (arr.length) {
        const smallestIndex = findSmallestIndex(arr);
        // Добавляем минимальный в новый массив
        sorted.push(arr[smallestIndex]);
        // Удаляем минимальный на итерации
        arr.splice(smallestIndex, 1);
    }

    return sorted;
}

// Небольшой произвольный массив
assert.deepStrictEqual(selectionSort([3, 1, 2, 5, 7]), [1, 2, 3, 5, 7]);
// Пустой массив
assert.deepStrictEqual(selectionSort([]), []);
// С отрицательными числами
assert.deepStrictEqual(selectionSort([1, -2, 3, 4, -11]), [-11, -2, 1, 3, 4]);
// Не только целые
assert.deepStrictEqual(selectionSort([0, 1.76, 1.11, -2.1, 33, 1020]), [-2.1, 0, 1.11, 1.76, 33, 1020]);

console.log('Прошло!');