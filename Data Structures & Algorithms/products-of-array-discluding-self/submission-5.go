func productExceptSelf(nums []int) []int {
	arr := make([]int, len(nums))

	curr := 1
	for i := range nums {
		arr[i] = curr
		curr *= nums[i]
	}

	curr = 1
	for i := range nums {
		arr[len(nums) - 1 - i] *= curr
		curr *= nums[len(nums) - 1 - i]
	}

	return arr
}
