import assert from 'node:assert/strict';

/**
 * Given an input integer array nums, write a function to find all unique triplets
 * [nums[i], nums[j], nums[k]] such that i, j, and k are distinct indices,
 * and the sum of nums[i], nums[j], and nums[k] equals zero.
 * Ensure that the resulting list does not contain any duplicate triplets.
 */

function treeSum(nums) {
    // Sort array to enable two-pointer technique and handle duplicates
    nums.sort((a, b) => a - b);
    const result = [];

    // Fix the first element and use two pointers for the remaining two
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Initialize two pointers for the remaining subarray
        let left = i + 1;
        let right = nums.length - 1;

        // Use two-pointer technique to find pairs that sum to -nums[i]
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total < 0) {
                // Sum too small, move left pointer right to increase sum
                left++;
            } else if (total > 0) {
                // Sum too large, move right pointer left to decrease sum
                right--;
            } else {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip all duplicate values to avoid duplicate triplets
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                // Move both pointers to continue searching
                left++;
                right--;
            }
        }
    }
    return result;
}

assert.equal(treeSum([-1, 0, 1, 2, -1, -1]), [
    [-1, -1, 2],
    [-1, 0, 1],
]);

console.log('Done');
