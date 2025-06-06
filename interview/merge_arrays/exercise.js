import assert from 'node:assert/strict';

// Данны два целочисленных массива nums1 и nums2 , отсортированные в 
// порядке возрастания и два целых числа m и n, которые обозначают длину первого 
// и второго массива соответственно. 

// Задача: Необходимо произвести слияние этих массивов, в массив nums1 таким 
// образом, чтобы nums1 оставался отсортированным. Для этого длина nums1 составляет
// m + n, где первые m элементов обозначают элементы, которые нужно объединить, 
// а последние n элементов установлены в 0 и должны быть проигнорированы. 

function merge(nums1, nums2, m, n) {
    
}

const array1 = [1, 2, 3, 0, 0, 0];
const array2 = [2, 5, 6];
merge(array1, array2, 3, 3);
assert.deepStrictEqual(array1, [1, 2, 2, 3, 5, 6]);

const array3 = [1];
const array4 = [];
merge(array3, array4, 1, 0);
assert.deepStrictEqual(array3, [1]);

console.log('Прошло с кайфом!');