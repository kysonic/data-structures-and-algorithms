import assert from 'node:assert/strict';

/**
 * Given a sorted array of integers nums,
 * determine if there exists a pair of numbers that sum to a given target.
 */

function twoSums(arr, target) {
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        const sum = arr[left] + arr[right]; 

        if (sum === target) {
            return true;
        }

        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}


assert.equal(twoSums([1, 3, 4, 6, 8, 10, 13], 13), true);

console.log('Done');