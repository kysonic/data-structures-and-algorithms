import assert from 'node:assert/strict';

// Brute Force O(n2) O(1)
// var twoSum = function (nums, target) {
//     let c = undefined;
//     for (let i = 0; i < nums.length; i++) {
//         c = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             if (target - c === nums[j]) {
//                 return [i, j];
//             }
//         }
//     }
// };

// Saver O(n) O(n)
var twoSum = function (nums, target) {
    const map = new Map(nums.map((n, i) => [n, { v: n, i }]));

    for (let i = 0; i < nums.length; i++) {
        const mapValue = map.get(target - nums[i]);
        if (mapValue && mapValue.i !== i) {
            return [i, mapValue.i];
        }
    }
};

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]);
assert.deepEqual(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]);

console.log('Done');
