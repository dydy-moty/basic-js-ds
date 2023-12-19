const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    if (!element) {
      return
    } else {
      const ARRAY = this.stack;
      ARRAY.push(element);
      return this.stack = ARRAY;
    }
  }

  pop() {
    const ARRAY = this.stack;
    const LAST_ELEM = ARRAY.pop();
    this.stack = ARRAY;
    return LAST_ELEM;
  }

  peek() {
    const ARRAY = this.stack;
    const  MAX = Math.max.apply(null, ARRAY);
    return  MAX;
  }
}

module.exports = {
  Stack
};
