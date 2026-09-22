func maxProfit(prices []int) int {
	l, maxProfit := 0, 0
	for r := range prices {
		if prices[r] - prices[l] > maxProfit {
			maxProfit = prices[r] - prices[l]
		}
		if prices[r] < prices[l] {
			l = r
		}
	}
	return maxProfit
}
