import assert from 'node:assert/strict';

const hIndex = (citations) => {
    let maxH = 0;

    for (let i = 0; i < citations.length; i++) {
        const currentValue = citations[i];
        let count = 0;

        for (let j = 0; j < citations.length; j++) {
            if (citations[j] >= currentValue) {
                count++;
            }
        }

        const potentialH = Math.min(currentValue, count);

        if (potentialH > maxH) {
            maxH = potentialH;
        }
    }

    return maxH;
};

assert.equal(hIndex([3, 0, 6, 1, 5]), 3);
assert.equal(hIndex([1, 3, 1]), 1);
assert.equal(hIndex([100]), 1);

console.log('S kaifom!');
