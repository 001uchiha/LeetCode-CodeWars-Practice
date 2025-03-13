// 🏆 Top K Frequent Elements - Medium (LeetCode)
var topKFrequent = function(nums, k) {
	const frequenyMap = new Map();

	nums.forEach(num => {
		frequenyMap.set(num, (frequenyMap.get(num) || 0) + 1);
	});

	return [...frequenyMap.entries()].sort((a, b) => {
		return b[1] - a[1];
	}).slice(0, k).map(pair => pair[0]);
}