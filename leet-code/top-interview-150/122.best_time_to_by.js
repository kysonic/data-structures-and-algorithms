import assert from 'node:assert/strict';
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let c = prices[0];
    let profit = 0;
    let cp = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - c > cp) {
            cp = prices[i] - c;
        } else {
            profit += cp;
            c = prices[i];
            cp = 0;
        }
    }

    profit += cp;

    return profit;
};

//Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 7);
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
assert.equal(maxProfit([1, 2, 3, 4, 5]), 4);
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);

console.log('С кайфом!');
