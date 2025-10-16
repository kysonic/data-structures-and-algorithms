import assert from 'node:assert/strict';

const jump = function (nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }

    return jumps;
};

assert.equal(jump([2, 3, 1, 1, 4]), 2);
assert.equal(jump([2, 3, 0, 1, 4]), 2);
assert.equal(jump([0]), 0);
assert.equal(jump([1, 2]), 1);

console.log('S kaifom!');
