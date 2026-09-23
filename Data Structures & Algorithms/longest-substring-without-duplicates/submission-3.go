func lengthOfLongestSubstring(s string) int {
	m := make(map[rune]int)
	l,max := 0,0
	for r, ch := range s {
		idx, ok := m[ch]
		if ok && idx >= l {
			l = idx + 1
		}
		m[ch] = r
		if r - l + 1 > max {
			max = r - l + 1
		}
	}
	return max
}
