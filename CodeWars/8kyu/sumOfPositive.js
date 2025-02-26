// 🏆 Given array, Sum all the positives ones - 8kyu (codeWars)
function positivSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}