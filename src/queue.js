const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  // constructor() {
  //   this.head = this.tail = null;
  //   this.length = 0;
  // }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
      // return this.head;
  }

  enqueue(value) {
    throw new NotImplementedError('Not implemented');
    // if (this.head === 0) {
    //   this.head = new ListNode(value);
    // } else {
    //   let current = this.head;
    //
    //   if (current.next) {
    //     current = current.next
    //   }
    //
    //   current.next = new ListNode(value);
    // }
    // this.length += 1;
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // if (this.head) {
    //   this.head = this.head.next;
    // }
    //
    // let value = this.head.value;
    // return value;
    //   this.length -= 1;
  }
}

module.exports = {
  Queue
};

