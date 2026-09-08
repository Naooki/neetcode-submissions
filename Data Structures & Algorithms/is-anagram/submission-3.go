import "maps"

func isAnagram(s string, t string) bool {
	m1 := make(map[rune]int)
	m2 := make(map[rune]int)

    for _, ch := range s {
        m1[ch]++
	}
	for _, ch := range t {
        m2[ch]++
	}

   return maps.Equal(m1,m2)
}
