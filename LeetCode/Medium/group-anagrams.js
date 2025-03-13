// 🏆 Group anagrams - Medium (LeetCode)
var groupAnagrams = function(strs) {
	const map = new Map();

	strs.forEach(str => {
		const sortedStr = str.split('').sort().join('');
		if (!map.has(sortedStr)) {
			map.set(sortedStr, []);
		}
		map.get(sortedStr).push(str);
	});

	return [...map.values()];
}