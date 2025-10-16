import assert from 'node:assert/strict';

// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

// You are given an integer array nums. You are initially positioned at the array's first index, and each element
// in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Dead end condition: if current index is beyond what we can reach
        if (i > maxReach) {
            return false;
        }
        
        // Update the farthest index we can reach
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If we can already reach the last index
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return maxReach >= nums.length - 1;
}

// // Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
assert.equal(canJump([2, 3, 1, 1, 4]), true);
// // Explanation: You will always arrive at index 3 no matter what.
// // Its maximum jump length is 0, which makes it impossible to reach the last index.
assert.equal(canJump([3, 2, 1, 0, 4]), false);
// // Explanation: 0 at the latest position
assert.equal(canJump([1, 1, 1, 0]), true);
// // Explanation: a few zeros
assert.equal(canJump([2, 0, 1, 0, 1]), false);
// // Explanation: zero in the middle
assert.equal(canJump([2, 0, 2]), true);
// // Explanation: binnary
assert.equal(canJump([1, 0, 1, 0]), false);
// // Explanation: binnary
assert.equal(canJump([2, 5, 0, 0]), true);
// Explanation: binnary
assert.equal(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]), true);

console.log('S kaifom!');
