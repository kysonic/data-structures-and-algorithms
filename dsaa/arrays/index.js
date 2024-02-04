function maxProfit(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let price of prices) {
      minPrice = Math.min(minPrice, price);
      let profit = price - minPrice;
      maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);