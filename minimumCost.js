function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = new Array(n);

    // Base cases
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    // Return the minimum cost to reach the top
    return Math.min(dp[n - 1], dp[n - 2]);
}

// Example usage
const cost = [10, 15, 20, 25, 30, 35];
const minCost = minCostClimbingStairs(cost);
console.log("Minimum cost to reach the top:", minCost);
