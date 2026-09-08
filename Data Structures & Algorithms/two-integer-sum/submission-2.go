func twoSum(nums []int, target int) []int {
    m := make(map[int]int)

	for j, n := range nums {
		i, ok := m[n]
		if ok {
			return []int{i,j}
		}
		m[target - n] = j
	}
	return []int{-1,-1}
}
