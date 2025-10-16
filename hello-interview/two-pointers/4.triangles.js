import assert from 'node:assert/strict';

/**
 * Write a function to count the number of triplets in an integer array nums that could form the sides of a triangle.
 * That means - a + b > c
 * The triplets do not need to be unique.
 */

function triangleNumber(heights) {
    const triplets = [];
    heights.sort((a, b) => b - a);

    for (let i = 0; i < heights.length; i++) {
        let first = heights[i];
        let left = i + 1; 
        let right = heights.length - 1;

        while (left < right) {
            if (first + heights[left] > heights[right]) {
                triplets.push([first, heights[left], heights[right]]);
                right--;
            }

            if (first + heights[left] < heights[right]) {
                left++;
            }
        }
    }

    return triplets.length;
}

assert.equal(triangleNumber([11, 4, 9, 6, 15, 18]), 10);

console.log('Done');
