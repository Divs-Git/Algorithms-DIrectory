/**
 * Memoization
 */
let dp: number[] = [];

function helper(i: number, nums: number[]): number {
  if (i >= nums.length) {
    return 0;
  }

  if (dp[i] !== -1) return dp[i];

  return (dp[i] = Math.max(helper(i + 1, nums), nums[i] + helper(i + 2, nums)));
}

function rob(nums: number[]): number {
  dp = Array(101).fill(-1);
  return helper(0, nums);
}

/**
 * Tabulation
 */
function rob(nums: number[]): number {
  let [rob1, rob2] = [0, 0];
  let maxRobTillNow;

  // [rob1,rob2,n,n+1,n+2....]
  for (const num of nums) {
    maxRobTillNow = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = maxRobTillNow;
  }
  return maxRobTillNow;
}
