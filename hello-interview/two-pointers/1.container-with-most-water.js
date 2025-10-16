import assert from 'node:assert/strict';

/**
 * Given an integer input array heights representing the heights of vertical lines,
 * write a function that returns the maximum area of water that can be contained by
 * two of the lines (and the x-axis).
 * The function should take in an array of integers and return an integer.
 */

function mostWater(heights) {
    let left = 0;
    let right = heights.length - 1;
    let currentMax = 0;

    while (left < right) {
        const width = right - left;
        const height = Math.min(heights[right], heights[left]);
        const area = width * height;

        currentMax = Math.max(currentMax, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return currentMax;
}

assert.equal(mostWater([3, 4, 1, 2, 2, 4, 1, 3, 2]), 21);
assert.equal(mostWater([1, 2, 1]), 2);

console.log('Done');
