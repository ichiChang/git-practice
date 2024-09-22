// 我這裡用 recursive 的方式來實作 fibonacci, 算是我一直以來做這個題目的方式，也比較直覺一點。
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// 練習一下用dp的方式來實作 fibonacci
function fib_dp(n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 檢查兩種方式的時間差異
console.time("recursive");
console.log(fib(40));
console.timeEnd("recursive");

console.time("dp");
console.log(fib_dp(40));
console.timeEnd("dp");
