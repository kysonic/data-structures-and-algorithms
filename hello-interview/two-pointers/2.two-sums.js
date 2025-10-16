import assert from 'node:assert/strict';

/**
 * Given a sorted array of integers nums,
 * determine if there exists a pair of numbers that sum to a given target.
 */

function twoSums(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return true;
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

assert.equal(twoSums([1, 3, 4, 6, 8, 10, 13], 13), true);

console.log('Done');
