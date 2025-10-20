import assert from 'node:assert/strict';

/**
 * Write a function to sort a given integer array nums in-place (and without the built-in sort function),
 * where the array contains n integers that are either 0, 1, and 2 and represent the colors red, white, and blue.
 * Arrange the objects so that same-colored ones are adjacent, in the order of red, white, and blue (0, 1, 2).
 */

function sortColors(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;

        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }

    return nums;
}

// HI Solution

function sortColors(nums) {
    let left = 0,
        right = nums.length - 1;
    let i = 0;

    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }

    return nums;
}

assert.deepEqual(sortColors([2, 1, 2, 0, 1, 0, 1, 0, 1]), [0, 0, 0, 1, 1, 1, 1, 2, 2]);

console.log('Done');
