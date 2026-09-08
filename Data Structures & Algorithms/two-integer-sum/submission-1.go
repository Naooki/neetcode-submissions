func twoSum(nums []int, target int) []int {
    m := make(map[int]int)

	for i, v := range nums {
		if j, ok := m[v]; ok {
          return []int{j, i}
		}
		m[target - v] = i
	}

	return []int{-1,-1}
}
