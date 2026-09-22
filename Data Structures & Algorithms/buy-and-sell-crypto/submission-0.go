func maxProfit(prices []int) int {
	l, maxProfit := 0, 0
	for i := range prices {
		if prices[i] - prices[l] > maxProfit {
			maxProfit = prices[i] - prices[l]
		}
		if prices[i] < prices[l] {
			l = i
		}
	}
	return maxProfit
}
