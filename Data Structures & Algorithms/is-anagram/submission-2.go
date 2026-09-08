func isAnagram(s string, t string) bool {
  arr := [26]int{}

  for _, ch := range s {
	arr[int(ch - 'a')]++
  }

  for _, ch := range t {
	arr[int(ch - 'a')]--
  }

  for _, v := range arr {
	if v != 0 {
		return false
	}
  }
  return true
}
