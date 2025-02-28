// 🏆 Count the number of Vowels in the given String - 7kyu (codeWars)
function getCount(str) {
	return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
}