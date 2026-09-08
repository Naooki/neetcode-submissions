func hasDuplicate(nums []int) bool {
    s := make(map[int]bool)
    
    for _, n := range nums {
        _, ok := s[n]
        if ok {
            return true
        }
        s[n] = true
    }
    return false
}
