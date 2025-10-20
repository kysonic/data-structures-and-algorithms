import assert from 'node:assert/strict';

/**
 * Given an integer array nums, write a function to rearrange the array by moving all zeros to the end while
 * keeping the order of non-zero elements unchanged. Perform this operation in-place without
 * creating a copy of the array.
 */

// function moveZeroes(nums) {
//     let c1 = 0;
//     let c2 = 0;

//     while (c1 < nums.length - 1 && c2 < nums.length - 1) {
//         if (nums[c1] !== 0) {
//             c1++;
//             c2++;
//         } else {
//             while (!nums[c2]) {
//                 c2++; 

//                 if (c2 >= nums.length) {
//                     return nums;
//                 }
//             }
            
//             [nums[c1], nums[c2]] = [nums[c2], nums[c1]];
//             c2 = c1;
//         }
//     }
//     return nums;
// }

// HI Solution 

function moveZeroes(nums) {
    let nextNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nextNonZero], nums[i]] = [nums[i], nums[nextNonZero]];
            nextNonZero++;
        }
    }
}

assert.deepEqual(moveZeroes([2, 0, 4, 0, 9]), [2, 4, 9, 0, 0]);
assert.deepEqual(moveZeroes([2, 0, 0, 4, 9]), [2, 4, 9, 0, 0]);

console.log('Done');
