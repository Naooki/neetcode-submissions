func groupAnagrams(strs []string) [][]string {
	m := make(map[[26]int][]string)

	for _, str := range strs {
		var key [26]int 
		for _, ch := range str {
			key[ch - 'a']++
		}
		if _, ok := m[key]; ok {
			m[key] = append(m[key], str)
		} else {
			m[key] = []string{str}
		}
	}

	var res [][]string
	for _, val := range m {
		res = append(res, val)
	}
	return res
}
