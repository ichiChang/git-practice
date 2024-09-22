// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from "./stack.js";

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

// 測試 pop
stack.pop();
stack.print();

// 測試 peek
console.log(stack.peek());

// 測試 isEmpty
// 預期為 false
console.log(stack.isEmpty());

// 測試 size
// 預期為 1
console.log(stack.size());

// 測試 clear
stack.clear();

// 預期為 true
console.log(stack.isEmpty());
