import assert from 'node:assert/strict';

// https://leetcode.com/problems/merge-sorted-array/submissions/1618588343/

// Устанавливаем 3 счетчика которые идут от конца к началу (тк массив отсортирован) - первый идет от фактического
// конца первого массива (он заполнен нулями), второй от реальных элементов первого массива (без нулей) и 
// третий от конца второго массива (с ним все хорошо). Выполняем сравнение, ставим на место больший элемент, 
// уменьшаем счетчик того массив чей элемент был установлен. Выходим из цикла если мы полностью прошли второй массив. 

// Почему не слева на право? Потому что так есть возможность перезатереть элемент первого массива. 
function merge(nums1, m, nums2, n) {
    let c = m + n - 1;
    let c1 = m - 1;
    let c2 = n - 1;

    while (c2 >= 0) {
        if (nums1[c1] >= nums2[c2]) {
            nums1[c] = nums1[c1];
            c1--;
        } else {
            nums1[c] = nums2[c2];
            c2--;
        }
        c--;
    }
}

const array1 = [1, 2, 3, 0, 0, 0];
const array2 = [2, 5, 6];
merge(array1, 3, array2, 3);
assert.deepStrictEqual(array1, [1, 2, 2, 3, 5, 6]);

const array3 = [1];
const array4 = [];
merge(array3, 1, array4, 0);
assert.deepStrictEqual(array3, [1]);
