func lengthOfLongestSubstring(s string) int {
	m := make(map[rune]int)
	l,max := 0,0
	for r, ch := range s {
		idx, ok := m[ch]
		if ok && idx >= l {
			l = idx + 1
			// clear(m)
			// for i := l; i <= r; i++ {
			// 	m[rune(s[i])] = i
			// }
		}
		m[ch] = r
		if r - l + 1 > max {
			max = r - l + 1
		}
	}
	return max
}

// a-0
// b-1
// d-3
// e-4
// f-5
// c-6

// a b c d e f c a
