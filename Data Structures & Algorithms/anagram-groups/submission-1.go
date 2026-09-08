func groupAnagrams(strs []string) [][]string {
   res := [][]string{{strs[0]}}

   isAnagram := func (str1 string , str2 string) bool {
	   arr := make([]int, 26)
	   for _, ch := range str1 {
           arr[ch - 'a']++
	   }
	   for _, ch := range str2 {
           arr[ch - 'a']--
	   }
	   for _, v := range arr {
			if v != 0 {
				return false
			}
	   }
	   return true
   }

   out:
   for i := 1; i < len(strs); i++ {
		for j := range res {
			if isAnagram(res[j][0], strs[i]) {
				res[j] = append(res[j], strs[i])
				continue out
			}
		}
		res = append(res, []string{strs[i]})
   }

   return res
}
