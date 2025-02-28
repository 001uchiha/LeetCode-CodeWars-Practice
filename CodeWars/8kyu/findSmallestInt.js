// 🏆 Find the smallest integer in the array - 8kyu (codeWars)
function findSmallestInt(arr) {
	let min = arr[0];
	for (let n of arr) {
		if (n < min) {
			min = n;
		}
	}
	return min;
}