type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	res := ""
	for _, str := range strs {
		res += strconv.Itoa(len(str)) + "_" + str
	}
	return res
}

func (s *Solution) Decode(encoded string) []string {
	strs := []string{}
	i := 0
	for i < len(encoded) {
		strLenEnc := ""
		for encoded[i] != '_' {
			strLenEnc += string(encoded[i])
			i++
		}
		i++
		strLen, _ := strconv.Atoi(strLenEnc)
		str := encoded[i: i + strLen]
		strs = append(strs, str)
		i += strLen
	}
	return strs
}
