func productExceptSelf(nums []int) []int {
	lr := make([]int, len(nums))
	rl := make([]int, len(nums))
	lr[0] = nums[0]
	rl[len(nums) - 1] = nums[len(nums) - 1]
	for i := 1; i < len(nums); i++ {
		lr[i] = lr[i-1] * nums[i]
		rl[len(nums) - 1 - i] = rl[len(nums) - i] * nums[len(nums) - 1 - i]
	}

	res := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		ans := 1
		if i - 1 >= 0 {
			ans *= lr[i - 1]
		}
		if i + 1 < len(rl) {
			ans *= rl[i+1]
		}
		res[i] = ans
	}
	return res
}
