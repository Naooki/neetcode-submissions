func groupAnagrams(strs []string) [][]string {
	m := make(map[[26]int][]string)

	for _, str := range strs {
		arr := [26]int{}
		for _, ch := range str {
			arr[ch - 'a']++
		}

		m[arr] = append(m[arr], str)
	}

	res := [][]string{}
	for _, bucket := range m {
		res = append(res, bucket)
	}
	return res
}
