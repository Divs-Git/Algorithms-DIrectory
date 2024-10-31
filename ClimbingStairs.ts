/**
 * Memoization
 * Time O(N) | Space O(1)
 */
let cache: number[] = [];

function helper(i: number, n: number): number {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }

  if (cache[i]) return cache[i];

  return (cache[i] = helper(i + 1, n) + helper(i + 2, n));
}

function climbStairs(n: number): number {
  cache = Array(50).fill(null);
  return helper(0, n);
}

/**
 * Tabulation
 * Time O(N) | Space O(1)
 */
function climbStairs(n: number): number {
  // We have initialized it with 1 and 1 because for last 2 ladder we will always have only 1 way for each to climb to the top(last).
  let [one, two] = [1, 1];
  let i = 0;

  while (i <= n - 2) {
    let temp = one;
    one = one + two;
    two = temp;
    i++;
  }
  return one;
}
