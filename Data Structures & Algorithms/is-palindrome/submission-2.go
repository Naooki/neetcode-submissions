func isAlphanumeric(v byte) bool {
    return (v >= '0' && v <= '9') || (v >= 'a' && v <= 'z') || (v >= 'A' && v <= 'Z')
}

func toUpperCase(v byte) byte {
    if v >= 'a' && v <= 'z' {
        return v - 'a' + 'A'
    }
    return v
}

func isPalindrome(s string) bool {
    l, r := 0, len(s) - 1
    
    for l < r {
        for l < r && !isAlphanumeric(s[l]) {
            l++
        }
        for l < r && !isAlphanumeric(s[r]) {
            r--
        }
        if l >= r {
            return true
        }
        if toUpperCase(s[l]) != toUpperCase(s[r]) {
            return false
        }
        l++
        r--
    }

    return true
}