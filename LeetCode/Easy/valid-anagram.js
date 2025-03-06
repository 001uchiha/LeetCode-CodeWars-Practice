// 🏆 Valid anagram - Easy (LeetCode)
var isAnagram = function(s, t) {	
	if (s.length !== t.length) return false;

	const count = {};

	// Count the frequency of each character in the first string
	for (let char of s) {
		count[char] = (count[char] || 0) + 1;
	}

	// Decrease the frequency based on the second string
	for (let char of t) {
		// If the character is not found or frequency is zero, return false
		if (!count[char]) return false;
		count[char]--;
	}

	return true; // If all frequencies are zero,  the strings are anagrams
}