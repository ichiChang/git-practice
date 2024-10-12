// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  // # 代表他是一個 private 的 property, 用來管理權限，類似 Java 宣告變數時的 private
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    // TODO
    // 直接使用 Array 的 push
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    // TODO
    // 直接使用 Array 的 pop
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    // 用長度 - 1 來取得最後一個數
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    // 看長度是否為 0 來回傳是否為空
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    // 直接回傳長度
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    // TODO
    // 直接創建一個空的 Array
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    // TODO
    // 使用 toString
    console.log(this.#items.toString());
  }
}
