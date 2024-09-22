// ary: number array
function sum(ary) {
  // TODO: sum all elements in ary
  // 經過查詢之後，發現可以使用 reduce 來處理
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  // 用箭頭函式來處理 reduce 的 callback function
  return ary.reduce((a, b) => a + b, 0);
}

// 挑戰題：別的寫法
// recursive解
// 用第一個數字加上剩下的數字的和
function sum_rec(ary) {
  if (ary.length === 0) return 0;

  return ary[0] + sum(ary.slice(1));
}

// 比較兩種方式的時間差異
console.time("reduce");
console.log(sum([1, 2, 3, 4, 5]));
console.timeEnd("reduce");

console.time("recursive");
console.log(sum_rec([1, 2, 3, 4, 5]));
console.timeEnd("recursive");

// 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
// 上底加下底的時間複雜度最佳
function sum_n(n) {
  return (n * (n + 1)) / 2;
}
