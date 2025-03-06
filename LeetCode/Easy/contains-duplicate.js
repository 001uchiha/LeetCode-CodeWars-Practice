// 🏆 Contains Duplicate - Easy (LeetCode)
var containDuplicate = function(nums) {
	return new Set(nums).size !== nums.length;
}