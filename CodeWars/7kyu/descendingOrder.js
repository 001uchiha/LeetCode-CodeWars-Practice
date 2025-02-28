// 🏆 Return digits in Descending Order - 7kyu (codeWars)
function descendingOrder(n) {
	return parseInt(n.toString().split('').sort((a, b) => b-a).join(''));
}
