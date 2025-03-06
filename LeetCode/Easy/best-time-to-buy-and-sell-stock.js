// 🏆 Best time to Buy and Sell Stock - Easy (LeetCode)
var maxProfit = function(prices) {
	let minPrice = Infinity;
	return prices.reduce((maxPrice, price) => {
		minPrice = Math.min(minPrice, price);
		return Math.max(maxPrice, price - minPrice);
	}, 0)
}